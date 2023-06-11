import { getMovies } from "@/lib/queries/movieQuery";

export default async function handler(req, res) {
  try {
    const { offset = 0, limit = 25 } = req.query;
    const movies = await getMovies(offset, limit);
    res.status(200).json(movies);
  } catch (error) {
    console.error("Error fetching movies:", error);
    res.status(500).json({ error: "Error fetching movies" });
  }
}
