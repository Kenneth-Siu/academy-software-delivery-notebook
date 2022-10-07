import express from "express";
import renderingRoutes from "./routes/renderingRoutes.js";

const server = express();

server.disable("x-powered-by");
server.use(express.static(process.env.RAZZLE_PUBLIC_DIR));
server.use("/", renderingRoutes);

export default server;
