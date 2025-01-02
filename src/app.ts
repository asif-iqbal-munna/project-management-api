import express, { Request, Response } from 'express';
const app = express();

app.use(express.json());

// app.use("/api", routes);

app.get('/api/health-check', (req: Request, res: Response) => {
  res.send('Health OK!');
});

// 404
app.use((req: Request, res: Response) => {
  res.status(404).send('Route Not Found');
});

export default app;
