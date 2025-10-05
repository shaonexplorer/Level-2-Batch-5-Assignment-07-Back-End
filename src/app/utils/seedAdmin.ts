import { prisma } from "../config";
import bcrypt from "bcrypt";

export const seedAdmin = async () => {
  let admin;
  try {
    admin = await prisma.user.findUnique({
      where: { email: "admin@gmail.com" },
    });
    if (!admin) {
      const hashedPassword = await bcrypt.hash("123", 10);
      admin = await prisma.user.create({
        data: {
          firstName: "admin",
          lastName: "admin",
          email: "admin@gmail.com",
          password: hashedPassword,
          username: "admin",
        },
      });
      return console.log("*** admin created successfully ***");
    }

    console.log("*** admin already exists ***");
  } catch (error) {
    console.log(error);
  }
};
