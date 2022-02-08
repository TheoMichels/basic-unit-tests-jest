const fizzBuzz = require("../src/fizzbuzz")

test('fizzBuzz-divisible-by-5', () => {
    expect(fizzBuzz(5)).toBe("Buzz")
})

test('fizzBuzz-divisible-by-3', () => {
    expect(fizzBuzz(3)).toBe("Fizz")
})

test('fizzBuzz-divisible-by-3-and-5', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz")
})

test('fizzBuzz-divisible-expect-to-be-false', () => {
    expect(fizzBuzz(31)).toBe("False")
})

test('fizzBuzz-zero-is-divisible', () => {
    expect(fizzBuzz(0)).toBe("Can't divise by 0")
})