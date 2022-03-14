const { jokeService, jokeServiceById } = require("./jokeService");

jest.mock("./jokeService");

describe("Joke Service Tests", () => {
  test("should return one joke", async () => {
    const result = await jokeService();
    expect(result).toHaveLength(1);
    expect(result[0].category).not.toBe("");
    try {
      expect(result[0].type).toBe("single");
    } catch {
      try {
        expect(result[0].type).toBe("twopart");
      } finally {
        expect(result[0].type).not.toBe("");
      }
    }
  });

  test("should return one joke by ID", async () => {
    const result = await jokeServiceById(12);
    expect(result).toHaveLength(1);
    expect(result[0].category).toBe("Programming");
    expect(result[0].type).toBe("single");
    expect(result[0].id).toBe(12);
  });
});
