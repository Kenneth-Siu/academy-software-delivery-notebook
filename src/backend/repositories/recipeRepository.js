import Recipe from "../models/Recipe";
import pool from "./pool";

export async function getAll() {
    try {
        const result = await pool.query(`SELECT * FROM recipe`);
        return result.rows.map((recipe) => new Recipe(recipe));
    } catch (err) {
        throw err;
    }
}
