export class Caregiver {
    id;
    userId;
    offersHosting;
    address;
    serviceRadiusKm;
    isVerified;
    isPublicProfile;
    createdAt;
    updatedAt;
    constructor(id, userId, offersHosting, address, serviceRadiusKm, isVerified, isPublicProfile, createdAt, updatedAt) {
        this.id = id;
        this.userId = userId;
        this.offersHosting = offersHosting;
        this.address = address;
        this.serviceRadiusKm = serviceRadiusKm;
        this.isVerified = isVerified;
        this.isPublicProfile = isPublicProfile;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        if (serviceRadiusKm <= 0) {
            throw new Error("Raio de atendimento inválido");
        }
    }
    canHostPets() {
        return this.offersHosting;
    }
    getServiceRadius() {
        return this.serviceRadiusKm;
    }
    verify() {
        this.isVerified = true;
        this.touch();
    }
    makePublic() {
        this.isPublicProfile = true;
        this.touch();
    }
    makePrivate() {
        this.isPublicProfile = false;
        this.touch();
    }
    isPublic() {
        return this.isPublicProfile;
    }
    getUserId() {
        return this.userId;
    }
    hasVerification() {
        return this.isVerified;
    }
    getAddress() {
        return this.address;
    }
    getUpdatedAt() {
        return this.updatedAt;
    }
    touch() {
        this.updatedAt = new Date();
    }
}
