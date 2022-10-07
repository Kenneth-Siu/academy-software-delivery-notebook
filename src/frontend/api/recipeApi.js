import { get } from "./api";

const baseUrl = "/api/recipes";

export async function getRecipes() {
    return get(baseUrl);
}
