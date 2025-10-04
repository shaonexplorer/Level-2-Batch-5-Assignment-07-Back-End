import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    public_id: (req, file) =>
      file.originalname.split(".")[0] + "-" + Date.now(),
  },
});
