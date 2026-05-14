import multer from "multer";

export const uploadProfileImage = multer({
  storage: multer.memoryStorage(),

  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },

  fileFilter(req, file, cb) {
    console.log("MIMETYPE:", file.mimetype);
    console.log("FILE:", file);

    const allowedMimeTypes = [
      "image/png",
      "image/jpeg",
      "image/jpg",
      "image/webp",
    ];

    if (!allowedMimeTypes.includes(file.mimetype)) {
      return cb(new Error("Tipo de arquivo inválido"));
    }

    cb(null, true);
  },
});
