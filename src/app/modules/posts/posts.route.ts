import express from "express";
import { postController } from "./posts.controller";
import { validateByZod } from "../../middlewares/zod-validation";
import { createPostSchema, updatePostSchema } from "./posts.schema";

const router = express.Router();

router.get("/", postController.getAllPosts);

router.post("/", validateByZod(createPostSchema), postController.createPost);

router.get("/:id", postController.getSinglePost);

router.delete("/:id", postController.deleteSinglePost);

router.patch(
  "/:id",
  validateByZod(updatePostSchema),
  postController.updateSinglePost
);

export const postRoute = router;
