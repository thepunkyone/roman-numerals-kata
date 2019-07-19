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
})