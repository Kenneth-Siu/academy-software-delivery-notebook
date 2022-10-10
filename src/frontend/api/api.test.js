import { makeFetch } from "./api";

let mockFetchReturn;
let fetchMock;

beforeEach(() => {
    mockFetchReturn = { ok: true };
    fetchMock = jest.fn(async () => mockFetchReturn);
    window.fetch = fetchMock;
});

afterAll(() => {
    delete window.fetch;
});

describe("makeFetch", () => {
    test("defaults method to GET", async () => {
        // Act
        await makeFetch();

        // Assert
        expect(fetchMock.mock.calls).toHaveLength(1);
        expect(fetchMock.mock.calls[0][1].method).toBe("GET");
    });

    test("sets header Content-Type to json if there is a body", async () => {
        // Act
        await makeFetch("ignored", "ignored", { data: "Request body" });

        // Assert
        expect(fetchMock.mock.calls).toHaveLength(1);
        expect(fetchMock.mock.calls[0][1].headers["Content-Type"]).toEqual(
            "application/json"
        );
    });

    test("attaches body to options if there is a body", async () => {
        // Arrange
        const body = { data: "Request body" };

        // Act
        await makeFetch("ignored", "ignored", body);

        // Assert
        expect(fetchMock.mock.calls).toHaveLength(1);
        expect(fetchMock.mock.calls[0][1].body).toEqual(JSON.stringify(body));
    });

    test("rejects if response is not ok", async () => {
        // Arrange
        mockFetchReturn.ok = false;
        try {
            // Act
            await makeFetch();
        } catch (e) {
            // Assert
            expect(e).toBe("Response not ok");
        } finally {
            expect.assertions(1);
        }
    });

    test("returns json if expecting json response", async () => {
        // Arrange
        const jsonData = { data: "JSON to be returned" };
        mockFetchReturn.json = () => jsonData;

        // Act
        const response = await makeFetch("ignored", "ignored", "ignored", true);

        // Assert
        expect(response).toEqual(jsonData);
    });

    test("returns nothing if not expecting json response", async () => {
        // Arrange
        mockFetchReturn.json = () => ({ data: "Should not be returned" });

        // Act
        const response = await makeFetch("ignored", "ignored", "ignored", false);

        // Assert
        expect(response).toBeUndefined();
    });
});
