import React from "react";
import renderWithRouter from "../../../shared/testHelpers/renderWithRouter";
import SkillsCoaches from "./SkillsCoaches";

describe("SkillsCoaches", () => {
    test("renders", () => {
        const tree = renderWithRouter(<SkillsCoaches />);
        expect(tree.container).toMatchSnapshot();
    });
});
