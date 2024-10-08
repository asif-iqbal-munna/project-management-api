import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import sendResponse from "./libs/responseHandler";
import routes from "./routes/index";
import { globalErrorHandler } from "./middlewares/handleErrors";
import { deserializeUser } from "./middlewares/deserializeUser";
const app: Application = express();

// This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());

// This is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(cookieParser());

app.get("/health", (req: Request, res: Response) => {
  res.send("Health OK!");
});

app.use(deserializeUser);

app.use("/api", routes);

app.use("*", (req: Request, res: Response) => {
  return sendResponse(res, {
    code: 404,
    status: false,
    message: "Route not found",
  });
});

app.use(globalErrorHandler);

export default app;
