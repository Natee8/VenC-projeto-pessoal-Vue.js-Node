import { cloudinary } from "../../infrastructure/database/config/cloudinary.js";
import streamifier from "streamifier";
export async function uploadImage(fileBuffer: Buffer): Promise<string> {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error("Upload timeout"));
    }, 10000); // 10s

    const stream = cloudinary.uploader.upload_stream(
      { folder: "profiles" },
      (error, result) => {
        clearTimeout(timeout);

        if (error) return reject(error);
        if (!result?.secure_url) {
          return reject(new Error("Upload falhou"));
        }

        resolve(result.secure_url);
      },
    );

    streamifier
      .createReadStream(fileBuffer)
      .on("error", (err) => {
        clearTimeout(timeout);
        reject(err);
      })
      .pipe(stream);
  });
}
