import pool from "./pool";

export async function getAll() {
    try {
        const result = await pool.query(`SELECT * FROM recipe`);
        return result.rows;
    } catch (err) {
        throw err;
    }
}
