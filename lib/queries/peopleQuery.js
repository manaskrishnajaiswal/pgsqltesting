import pool from "../db";
import { testConnection } from "../db";

export const getPeoples = async () => {
  try {
    testConnection();
    const result = await pool.query("SELECT * FROM people LIMIT 25");
    return result.rows;
  } catch (error) {
    console.error("Error retrieving users:", error);
    throw error;
  }
};
