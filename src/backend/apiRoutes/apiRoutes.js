import { Router } from "express";
import recipeRoutes from "./recipeRoutes.js";

const apiRoutes = Router();

apiRoutes.use("/recipes", recipeRoutes);

apiRoutes.use((req, res) => {
    res.sendStatus(404);
});

export default apiRoutes;
