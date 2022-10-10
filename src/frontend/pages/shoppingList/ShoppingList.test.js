import React from "react";
import renderWithRouter from "../../../shared/testHelpers/renderWithRouter";
import ShoppingList from "./ShoppingList";

describe("ShoppingList", () => {
    test("renders", () => {
        const tree = renderWithRouter(<ShoppingList />);
        expect(tree.container).toMatchSnapshot();
    });
});
