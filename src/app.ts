import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();

// This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());

// This is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/health", (req: Request, res: Response) => {
  res.send("Health OK!");
});

export default app;
