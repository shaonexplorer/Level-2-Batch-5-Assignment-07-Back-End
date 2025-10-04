import express from "express";
import { postController } from "./posts.controller";
import { validateByZod } from "../../middlewares/zod-validation";
import { createPostSchema, updatePostSchema } from "./posts.schema";
import multer from "multer";
import { storage } from "../../config/cloudinary/multer.storage.cloudinary";

const upload = multer({ storage: storage });

const router = express.Router();

router.get("/", postController.getAllPosts);

router.post(
  "/",
  upload.single("image"),
  validateByZod(createPostSchema),
  postController.createPost
);

router.get("/:id", postController.getSinglePost);

router.delete("/:id", postController.deleteSinglePost);

router.patch(
  "/:id",
  validateByZod(updatePostSchema),
  postController.updateSinglePost
);

export const postRoute = router;
