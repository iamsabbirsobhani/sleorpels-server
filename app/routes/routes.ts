import { Request, Response, Application } from "express";

export const routes = (app: Application) => {
  app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
  });
};
