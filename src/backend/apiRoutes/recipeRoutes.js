import { Router } from "express";
import * as recipeRepository from "../repositories/recipeRepository";

const recipeRoutes = Router();

recipeRoutes.get("/", async (req, res) => {
    try {
        const recipes = await recipeRepository.getAll();
        res.send(recipes);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

export default recipeRoutes;
