import { Request, Response } from "express";
import { QueryResult } from "pg";
import { db } from "../db";

interface query {
  data: QueryResult<any> | null;
  error: Error | null;
}

export const GetProducts = async (req: Request, res: Response) => {
  const result: query = await db.query(
    `
    SELECT p.id, p.product_name, p.product_images, p.product_description, p.size_and_fit, p.look_after_me, p.about_me, p.color, p.asking_price, p.discount_pct, json_agg(ps.size) AS sizes
    FROM products p
    JOIN products_product_sizes ppm ON p.id = ppm.products_id
    JOIN product_sizes ps ON ppm.product_sizes_id = ps.id
    GROUP BY p.id;

    `,
    []
  );

  if (result.error) {
    console.error("Error executing query: ", result.error.stack);
    res.status(500).json({ error: result.error.message });
  } else {
    res.status(200).json({ data: result.data.rows });
  }
};
