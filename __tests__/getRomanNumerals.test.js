const getRomanNumerals = require('../getRomanNumerals');

describe('Convert from Arabic to Roman numerals', () => {
   
    it('returns an empty string when not given a number', () => {
        expect(getRomanNumerals()).toBe('');
    })

    it('returns the string I when given the number 1', () => {
        expect(getRomanNumerals(1)).toBe('I')
    })
})