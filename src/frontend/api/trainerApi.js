import Trainer from "../models/Trainer";
import { get } from "./api";

const baseUrl = "/api/trainers";

export async function getTrainers() {
    return (await get(baseUrl)).map((trainer) => new Trainer(trainer));
}
