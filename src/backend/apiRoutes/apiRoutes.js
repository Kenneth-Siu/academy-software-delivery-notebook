import { Router } from "express";
import trainerRoutes from "./trainerRoutes.js";

const apiRoutes = Router();

apiRoutes.use("/trainers", trainerRoutes);

apiRoutes.use((req, res) => {
    res.sendStatus(404);
});

export default apiRoutes;
