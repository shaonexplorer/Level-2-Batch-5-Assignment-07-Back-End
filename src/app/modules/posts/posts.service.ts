import { Request } from "express";
import { prisma } from "../../config";

const createPost = async (req: Request) => {
  const { title, content, slug } = req.body;
  const post = await prisma.post.create({
    data: {
      title,
      slug,
      content,
      authorId: Number(req.body.authorId),
      imageUrl: req?.file?.path,
    },
    include: { author: true },
  });

  return post;
};

const getAllPosts = async () => {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    include: { author: true },
  });
  return posts;
};

const getSinglePost = async (req: Request) => {
  const id = Number(req.params.id);
  const post = await prisma.post.findUnique({
    where: { id },
    include: { author: true },
  });

  if (!post) {
    throw new Error("Post not found");
  }
  return post;
};

const deleteSinglePost = async (req: Request) => {
  const id = Number(req.params.id);
  const post = await prisma.post.delete({
    where: { id },
  });

  if (!post) {
    throw new Error("Post not found");
  }
  return post;
};

const updateSinglePost = async (req: Request) => {
  const id = Number(req.params.id);
  const post = await prisma.post.update({
    where: { id },
    data: req.body,
  });

  if (!post) {
    throw new Error("Post not found");
  }
  return post;
};

export const postService = {
  createPost,
  getAllPosts,
  getSinglePost,
  deleteSinglePost,
  updateSinglePost,
};
