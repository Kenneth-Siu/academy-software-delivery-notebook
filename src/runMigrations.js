import { migrate } from "postgres-migrations";

export default async function runMigrations() {
    console.log("Running migrations...");

    try {
        const dbConfig = {
            database: process.env.PGDATABASE,
            user: process.env.PGUSER,
            password: process.env.PGPASSWORD,
            host: process.env.PGHOST,
            port: Number.parseInt(process.env.PGPORT),
            ensureDatabaseExists: true,
            defaultDatabase: "postgres",
        };
        await migrate(dbConfig, "./src/backend/migrations");
        console.log("✅ Migrations complete");
    } catch (err) {
        console.log("🛑 Migrations have an error");
        console.error(err);
    }
}
