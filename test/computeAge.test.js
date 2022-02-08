const computeAge = require("../src/computeAge")

test('computeAge-results-20-years', () => {
    expect(computeAge(new Date(2000, 5, 23), Date.now())).toBe(21)
})

test('computeAge-results-55-years', () => {
    expect(computeAge(new Date(1966, 10, 15), Date.now())).toBe(55)
})

test('computeAge-results-55-years', () => {
    expect(computeAge(new Date(1966, 10, 15), Date.now())).toBe(55)
})

test('computeAge-results-0-year', () => {
    expect(computeAge(new Date(2021, 11, 15), Date.now())).toBe(0)
})

test('computeAge-results-0-year', () => {
    expect(computeAge(new Date(2050, 11, 15), Date.now())).toBe("It can't be a negative age")
})