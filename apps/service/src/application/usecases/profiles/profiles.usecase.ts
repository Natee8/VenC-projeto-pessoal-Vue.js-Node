import { UsersRepository } from "apps/service/src/infrastructure/repositories/auth/authLogin.repository.js";
import { OwnerProfileRepository } from "../../../infrastructure/repositories/user/userOwner.repository.js";
import { CaregiverRepository } from "../../../infrastructure/repositories/user/userCaregiver.repository.js";
import { CaregiverPetPreferenceRepository } from "apps/service/src/infrastructure/repositories/user/caregiverPetPreference.repository.js";
import { ServiceOfferRepository } from "apps/service/src/infrastructure/repositories/services/serviceOffer.repository.js";
import { UserReviewRepository } from "apps/service/src/infrastructure/repositories/rating/ratingUser.repositorie.js";

export class ProfileUseCase {
  constructor(
    private usersRepo: UsersRepository,
    private ownerProfileRepo: OwnerProfileRepository,
    private caregiverRepo: CaregiverRepository,
    private serviceRepo: ServiceOfferRepository,
    private reviewRepo: UserReviewRepository,
    private preferenceRepo: CaregiverPetPreferenceRepository,
  ) {}

  async getProfile(userId: number) {
    const [user, ownerProfile, caregiver] = await Promise.all([
      this.usersRepo.findWithProfilesById(userId),
      this.ownerProfileRepo.findByUserId(userId),
      this.caregiverRepo.findByUserId(userId),
    ]);

    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    if (!caregiver?.id) {
      return {
        user,
        ownerProfile: ownerProfile ?? null,
        caregiverProfile: null,
        services: [],
        preferences: [],
        reviews: [],
      };
    }

    const [services, preferences, reviews] = await Promise.all([
      this.serviceRepo.findByCaregiver(caregiver.id),
      this.preferenceRepo.findByCaregiverId(caregiver.id),
      this.reviewRepo.findByCaregiverId(caregiver.id),
    ]);

    return {
      user,
      ownerProfile: ownerProfile ?? null,
      caregiverProfile: caregiver,
      services,
      preferences,
      reviews,
    };
  }
}
