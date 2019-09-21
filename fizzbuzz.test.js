const FizzBuzz = require("./fizzbuzz");

describe("Test FizzBuzz", () => {
  test("Test 1 expact 1", () => {
    const result = FizzBuzz.say(1);
    expect(result).toEqual(1); //Assert Function
  });

  test("Test 3 expact Fizz", () => {
    const result = FizzBuzz.say(3);
    expect(result).toEqual("Fizz");
  });

  test("Test 5 expact Buzz", () => {
    const result = FizzBuzz.say(5);
    expect(result).toEqual("Buzz");
  });

  test("Test 10 expact Buzz", () => {
    const result = FizzBuzz.say(10);
    expect(result).toEqual("Buzz");
  });

  test("Test 13 expact 13", () => {
    const result = FizzBuzz.say(13);
    expect(result).toEqual(13);
  });

  test("Test 15 expact FizzBuzz", () => {
    const result = FizzBuzz.say(15);
    expect(result).toEqual("FizzBuzz");
  });

  test("Test 30 expact FizzBuzz", () => {
    const result = FizzBuzz.say(30);
    expect(result).toEqual("FizzBuzz");
  });
});
