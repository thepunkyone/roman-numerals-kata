const getRomanNumerals = require('../getRomanNumerals');

describe('Convert from Arabic to Roman numerals', () => {
    it('returns an empty string when not given a number', () => {
        expect(getRomanNumerals()).toBe('');
    }) 
})