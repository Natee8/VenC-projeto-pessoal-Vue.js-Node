import { cloudinary } from "../../infrastructure/database/config/cloudinary.js";
import streamifier from "streamifier";

export async function uploadImage(fileBuffer: Buffer) {
  return new Promise<string>((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "profiles",
      },

      (error, result) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(result!.secure_url);
      },
    );

    streamifier.createReadStream(fileBuffer).pipe(stream);
  });
}
