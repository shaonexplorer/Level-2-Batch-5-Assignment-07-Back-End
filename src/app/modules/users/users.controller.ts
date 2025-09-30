import { NextFunction, Request, Response } from "express";
import { userService } from "./users.service";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userService.createUser(req);
    res.status(201).json({ status: 201, success: true, data: user });
  } catch (error) {
    next(error);
  }
};

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userService.getUser(req);
    res.status(200).json({ status: 200, success: true, data: user });
  } catch (error) {
    next(error);
  }
};

export const userController = { createUser, getUser };
