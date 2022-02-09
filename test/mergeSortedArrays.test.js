const mergeSortedArrays = require("../src/mergeSortedArrays")

test('first-element-should-be-1', () => {
    expect(mergeSortedArrays([4,5], [1,2,3]).at(0)).toBe(1)
})

test('last-element-should-be-5', () => {
    expect(mergeSortedArrays([4,5], [1,2,3]).at(-1)).toBe(5)
})

test('last-element-should-be-7', () => {
    expect(mergeSortedArrays([4,7, 4, 2, 6], [3, 1, 5]).at(-1)).toBe(7)
})

test('size-of-array-should-be-5', () => {
    expect(mergeSortedArrays([4, 2, 6], [1, 5]).length).toBe(5)
})