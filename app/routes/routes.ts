import { Request, Response, Application } from "express";
import { QueryResult } from "pg";
import { GetProducts } from "../controller/products";
import { db } from "../db";

export const routes = (app: Application) => {
  app.get("/", GetProducts);
};
