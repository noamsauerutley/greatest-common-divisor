let greatestCommonDivisor = require('../greatestCommonDivisor')

describe('#greatestCommonDivisor', () => {
    test("if one variable is zero, the other variable is returned", () => {
        expect(greatestCommonDivisor(0, 5)).toEqual(5)
    })
    test("it returns the greatest common divisor", () => {
        expect(greatestCommonDivisor(8, 12)).toEqual(4)
    })
})