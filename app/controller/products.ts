import { Request, Response } from "express";
import { QueryResult } from "pg";
import { db } from "../db";

interface query {
  data: QueryResult<any> | null;
  error: Error | null;
}

export const GetProducts = async (req: Request, res: Response) => {
  const result: query = await db.query("SELECT * FROM Students", []);

  if (result.error) {
    console.error("Error executing query: ", result.error.stack);
    res.status(500).json({ error: result.error.message });
  } else {
    res.status(200).json({ data: result.data.rows });
  }
};
