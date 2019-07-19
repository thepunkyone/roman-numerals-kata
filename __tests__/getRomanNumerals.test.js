const getRomanNumerals = require('../getRomanNumerals');

describe('Convert from Arabic numbers to Roman numerals', () => {
   
    it('returns an empty string when not given a number', () => {
        expect(getRomanNumerals()).toBe('');
    })

    it('returns the corresponding multiple of string I when given numbers 1 to 3', () => {
        expect(getRomanNumerals(1)).toBe('I')
        expect(getRomanNumerals(2)).toBe('II')
        expect(getRomanNumerals(3)).toBe('III')
    })

    it('returns the string IV when given the number 4', () => {
        expect(getRomanNumerals(4)).toBe('IV')
    })

    it('returns the string V when given the number 5', () => {
        expect(getRomanNumerals(5)).toBe('V')
    })

    it('returns the string V and corresponding multiples of the string I when the number is greater than 5', () => {
        expect(getRomanNumerals(6)).toBe('VI')
        expect(getRomanNumerals(7)).toBe('VII')
    })

    it('returns the string IX for number 9', () => {
        expect(getRomanNumerals(9)).toBe('IX')
    })

    it('returns the corresponding multiple of string X for numbers 10 and 20', () => {
        expect(getRomanNumerals(10)).toBe('X')
        expect(getRomanNumerals(20)).toBe('XX')
    })

    it('returns the string XL for number 40', () => {
        expect(getRomanNumerals(40)).toBe('XL')
    })

    it('returns the string L for number 50', () => {
        expect(getRomanNumerals(50)).toBe('L')
    })

    it('returns the string L and corresponding multiple of string X for numbers which are greater than 50 and can be divided by 10', () => {
        expect(getRomanNumerals(60)).toBe('LX')
        expect(getRomanNumerals(70)).toBe('LXX')
    })

    it('returns the string XC for number 90', () => {
        expect(getRomanNumerals(90)).toBe('XC')
    })

})