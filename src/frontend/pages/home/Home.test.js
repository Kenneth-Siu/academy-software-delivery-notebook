import React from "react";
import Home from "./Home";
import renderWithRouter from "../../../shared/testHelpers/renderWithRouter";

describe("Home", () => {
    test("renders", () => {
        const tree = renderWithRouter(<Home />);
        expect(tree.container).toMatchSnapshot();
    });
});
