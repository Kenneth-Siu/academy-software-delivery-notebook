import express from "express";
import apiRoutes from "./apiRoutes/apiRoutes.js";
import renderingRoutes from "./renderingRoutes.js";

const server = express();

server.disable("x-powered-by");
server.use("/api", apiRoutes);
server.use(express.static(process.env.RAZZLE_PUBLIC_DIR));
server.use("/", renderingRoutes);

export default server;
