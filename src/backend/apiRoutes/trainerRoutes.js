import { Router } from "express";
import * as trainerRepository from "../repositories/trainerRepository";

const trainerRoutes = Router();

trainerRoutes.get("/", async (req, res) => {
    try {
        const trainers = await trainerRepository.getAll();
        res.send(trainers);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

export default trainerRoutes;
