import { Client, QueryResult } from "pg";
import { Pool } from "pg";
import fs from "fs";
import "dotenv/config";

interface query {
  data: QueryResult<any> | null;
  error: Error | null;
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // ssl: {
  //   ca: fs.readFileSync("./dist/app/config/prod-ca-2021.crt").toString(),
  // },
});

export const db = {
  query: async (text: string, params: any): Promise<query> => {
    try {
      const client = await pool.connect();
      const result: QueryResult = await client.query(text, params);
      client.release();
      return { data: result, error: null };
    } catch (err) {
      console.error("Error executing query: ", err.stack);
      return { data: null, error: err };
    }
  },
};
