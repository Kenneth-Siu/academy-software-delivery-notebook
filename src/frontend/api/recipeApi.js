import Recipe from "../models/Recipe";
import { get } from "./api";

const baseUrl = "/api/recipes";

export async function getRecipes() {
    return (await get(baseUrl)).map((recipe) => new Recipe(recipe));
}
