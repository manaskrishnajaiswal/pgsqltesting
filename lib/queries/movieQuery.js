import pool from "../db";
import { testConnection } from "../db";

export const getMovies = async (offset, limit, sortByCol) => {
  try {
    testConnection();
    const result = await pool.query(
      `SELECT * FROM movies ORDER BY ${sortByCol} ASC OFFSET $1 LIMIT $2`,
      [offset, limit]
    );
    return result.rows;
  } catch (error) {
    console.error("Error retrieving users:", error);
    throw error;
  }
};
