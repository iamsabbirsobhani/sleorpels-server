import { Request, Response } from "express";
import { EventEmitter } from "node:events";

export const customEvents = (myEmitter: EventEmitter) => {
  myEmitter.on("requests", (req: Request, res: Response) => {
    console.log(req.url);
  });
};
