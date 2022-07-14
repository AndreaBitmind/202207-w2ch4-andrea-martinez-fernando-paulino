import SkylabArray from "./SkylabArray";

describe("Given a class SkylabArray", () => {
  describe("When its called and it receives a 0, 'oi' and 9", () => {
    test("Then it should return an array of these numbers", () => {
      const value1 = 0;
      const value2 = "oi";
      const value3 = 9;
      const expectedTotal = { 0: 0, 1: "oi", 2: 9 };

      const total = new SkylabArray(0, "oi", 9);

      expect(total).toEqual(expectedTotal);
    });
  });
});
