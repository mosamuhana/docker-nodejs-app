import express from "express";
import type { Express, Request, Response } from "express";

const PORT = Number(process.env.PORT) || 8000;

const app: Express = express();

app.get("/", async (req: Request, res: Response) => {
  res.send("Hello from nodejs in docker container");
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
