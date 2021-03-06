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

    it('returns the string XXIX for number 29', () => {
        expect(getRomanNumerals(29)).toBe('XXIX')
    })

    it('returns the string XLV for number 45', () => {
        expect(getRomanNumerals(45)).toBe('XLV')
    })

    it('returns the string C for number 100', () => {
        expect(getRomanNumerals(100)).toBe('C')
    })

    it('returns the string CD for number 400', () => {
        expect(getRomanNumerals(400)).toBe('CD')
    })

    it('returns the string CDLVI for number 456', () => {
        expect(getRomanNumerals(456)).toBe('CDLVI')
    })

    it('returns the string DLXXIII for number 573', () => {
        expect(getRomanNumerals(573)).toBe('DLXXIII')
    })

    it('returns the string CMLXXX for number 980', () => {
        expect(getRomanNumerals(980)).toBe('CMLXXX')
    })

    it('returns the string M for number 1000', () => {
        expect(getRomanNumerals(1000)).toBe('M')
    })

    it('returns the string MMVII for number 2008', () => {
        expect(getRomanNumerals(2008)).toBe('MMVIII')
    })

    it('returns the string MCMXCIX for number 1999', () => {
        expect(getRomanNumerals(1999)).toBe('MCMXCIX')
    })

})