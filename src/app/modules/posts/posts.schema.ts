import z from "zod";

export const createPostSchema = z.object({
  title: z.string("title must be a string"),
  slug: z.string("slug must be a string"),
  content: z.string("content must be a string"),
  imageUrl: z.string().optional(),
  authorId: z.string("authorId is required"),
});

export const updatePostSchema = z.object({
  title: z.string("title must be a string").optional(),
  slug: z.string("slug must be a string").optional(),
  content: z.string("content must be a string").optional(),
  imageUrl: z.string().optional(),
  authorId: z.number("authorId must be a number").optional(),
});
