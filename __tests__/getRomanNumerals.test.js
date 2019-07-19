const getRomanNumerals = require('../getRomanNumerals');

describe('Convert from Arabic numbers to Roman numerals', () => {
   
    it('returns an empty string when not given a number', () => {
        expect(getRomanNumerals()).toBe('');
    })

    it('returns the string I when given the number 1', () => {
        expect(getRomanNumerals(1)).toBe('I')
    })

    it('returns the string II when given the number 2', () => {
        expect(getRomanNumerals(2)).toBe('II')
    })

    it('returns the string III when given the number 2', () => {
        expect(getRomanNumerals(3)).toBe('III')
    })

    it('returns the string IV when given the number 4', () => {
        expect(getRomanNumerals(4)).toBe('IV')
    })

    it('returns the string V when given the number 5', () => {
        expect(getRomanNumerals(5)).toBe('V')
    })

    it('returns the string VI when given the number 6', () => {
        expect(getRomanNumerals(6)).toBe('VI')
    })
})