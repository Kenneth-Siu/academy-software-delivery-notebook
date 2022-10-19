import Trainer from "../models/Trainer";
import pool from "./pool";

export async function getAll() {
    try {
        const result = await pool.query(`SELECT * FROM trainer`);
        return result.rows.map((trainer) => new Trainer(trainer));
    } catch (err) {
        throw err;
    }
}
