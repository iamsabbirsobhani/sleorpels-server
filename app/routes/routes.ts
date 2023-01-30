import { Request, Response } from "express";

export const routes = (app: any) => {
  app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
  });
};
