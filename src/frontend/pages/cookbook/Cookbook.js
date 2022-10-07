import React, { useEffect, useState } from "react";
import { getRecipes } from "../../api/recipeApi";
import "./Cookbook.scss";

export default function Cookbook() {
    const [recipes, setRecipes] = useState(null);

    useEffect(async () => {
        setRecipes(await getRecipes());
    }, []);

    return (
        <main className="cookbook-page">
            <h1>Cookbook</h1>
            {recipes ? (
                <table>
                    <tbody>
                        {recipes.map((recipe) => (
                            <tr key={recipe.id}>
                                <td>{recipe.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Loading...</p>
            )}
        </main>
    );
}
