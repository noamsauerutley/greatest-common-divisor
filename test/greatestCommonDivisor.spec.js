let greatestCommonDivisor = require('../greatestCommonDivisor')

describe('#greatestCommonDivisor', () => {
    test("if one variable is zero, the other variable is returned", () => {
        expect(greatestCommonDivisor(0, 5)).toEqual(5)
        expect(greatestCommonDivisor(5, 0)).toEqual(5)
    })
    test("it returns the greatest common divisor", () => {
        expect(greatestCommonDivisor(8, 12)).toEqual(4)
    })
    test("it returns the greatest common divisor when one or both number(s) is negative", () => {
        expect(greatestCommonDivisor(-8, 12)).toEqual(4)
        expect(greatestCommonDivisor(-8, -12)).toEqual(4)
        expect(greatestCommonDivisor(8, -12)).toEqual(4)
    })
    test("it returns an error message if given incorrect params", () => {
        expect(greatestCommonDivisor()).toEqual("Please enter two integers which are not both zero")
        expect(greatestCommonDivisor(5)).toEqual("Please enter two integers which are not both zero")
        expect(greatestCommonDivisor(0, 0)).toEqual("Please enter two integers which are not both zero")
        expect(greatestCommonDivisor("hello", 5)).toEqual("Please enter two integers which are not both zero")
        expect(greatestCommonDivisor(5, true)).toEqual("Please enter two integers which are not both zero")
        expect(greatestCommonDivisor(null, 5)).toEqual("Please enter two integers which are not both zero")
        expect(greatestCommonDivisor(undefined, 5)).toEqual("Please enter two integers which are not both zero")
    })
    
})