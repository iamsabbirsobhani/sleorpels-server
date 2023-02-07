import { Request, Response, Application, Router } from "express";
import { QueryResult } from "pg";
import { GetProducts } from "../controller/products";
import { db } from "../db";

// creating a router
const router = Router();

router.get("/", GetProducts);

export { router };
