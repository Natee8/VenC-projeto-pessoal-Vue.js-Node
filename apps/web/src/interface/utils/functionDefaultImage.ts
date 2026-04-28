const DEFAULT_PROFILE_IMAGES = {
  black:
    "https://res.cloudinary.com/ditaon8no/image/upload/v1777381405/Black_oumw3q.svg",

  white:
    "https://res.cloudinary.com/ditaon8no/image/upload/v1777381416/W_hite_jybtx1.svg",
};

type ProfileVariant = "black" | "white";

export function getProfileImage(
  profilePhotoUrl?: string | null,
  variant: ProfileVariant = "black",
) {
  return profilePhotoUrl || DEFAULT_PROFILE_IMAGES[variant];
}
