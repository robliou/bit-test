//import { describe, expect, test } from "@jest/globals";

const detectPatterns = require("./src/index");

describe("DetectPatterns", () => {
  test('[333.bit] should result in "AAA", "999"', () => {
    let bitName = "333.bit";
    expect(detectPatterns([bitName]).toBe("AAA", "999"));
  });
});
