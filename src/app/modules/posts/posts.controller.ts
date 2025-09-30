import { NextFunction, Request, Response } from "express";
import { postService } from "./posts.service";

const createPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const post = await postService.createPost(req);

    res.status(201).json({
      status: 201,
      success: true,
      data: post,
    });
  } catch (error) {
    next(error);
  }
};

const getAllPosts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const posts = await postService.getAllPosts();

    res.status(200).json({
      status: 200,
      success: true,
      data: posts,
    });
  } catch (error) {
    next(error);
  }
};

const getSinglePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const post = await postService.getSinglePost(req);

    res.status(200).json({
      status: 200,
      success: true,
      data: post,
    });
  } catch (error) {
    next(error);
  }
};

const deleteSinglePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const post = await postService.deleteSinglePost(req);

    res.status(200).json({
      status: 200,
      success: true,
      data: post,
    });
  } catch (error) {
    next(error);
  }
};

const updateSinglePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const post = await postService.updateSinglePost(req);

    res.status(200).json({
      status: 200,
      success: true,
      data: post,
    });
  } catch (error) {
    next(error);
  }
};

export const postController = {
  createPost,
  getAllPosts,
  getSinglePost,
  deleteSinglePost,
  updateSinglePost,
};
