import React from "react";
import { act, waitFor } from "@testing-library/react";
import renderWithRouter from "../../../shared/testHelpers/renderWithRouter";
import Trainers from "./Trainers";

let fetchMock;

beforeAll(() => {
    fetchMock = jest.fn(async () => {
        return {
            ok: true,
            json: () => [
                { id: 1, name: "Apple pie" },
                { id: 4, name: "Halloumi Hamburgers" },
                { id: 2, name: "Tomato Soup" },
            ],
        };
    });
    window.fetch = fetchMock;
});

afterAll(() => {
    delete window.fetch;
});

describe("Trainers page", () => {
    test("renders", async () => {
        // Arrange
        let tree;

        // Act
        act(() => {
            tree = renderWithRouter(<Trainers />);
        });
        await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));

        // Assert
        expect(tree.container).toMatchSnapshot();
    });
});
