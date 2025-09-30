import { Request } from "express";
import { prisma } from "../../config";
import bcrypt from "bcrypt";

const createUser = async (req: Request) => {
  const data = req.body;
  let password = data.password;

  const hashedPassword = await bcrypt.hash(password, 10);
  password = hashedPassword;

  const user = await prisma.user.create({ data: { ...data, password } });

  return user;
};

const getUser = async (req: Request) => {
  const email = req.query.email as string;

  const user = await prisma.user.findFirst({ where: { email } });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

export const userService = { createUser, getUser };
