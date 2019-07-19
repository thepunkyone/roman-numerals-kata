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
})