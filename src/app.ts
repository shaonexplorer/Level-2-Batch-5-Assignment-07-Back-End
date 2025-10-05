import express, { NextFunction, Request, Response } from "express";
import { postRoute } from "./app/modules/posts/posts.route";
import { userRoute } from "./app/modules/users/users.routes";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [
      `http://localhost:3000`,
      "https://level-2-batch-5-assignment-07-front.vercel.app",
    ],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("*** Hello, World! Api is running ***");
});

app.use("/api/v1/post", postRoute);
app.use("/api/v1/user", userRoute);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    status: 404,
    success: false,
    message: "Route Not Found",
  });
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.status(error.status || 400).json({
    status: error.status,
    success: false,
    message: error.message || "Bad Request",
    error,
  });
});

export default app;
