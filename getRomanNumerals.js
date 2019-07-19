getRomanNumerals = (number) => {
    if (number) {
        if (number < 4) {
            return 'I'.repeat(number)
        }
        if (number === 4) return 'IV'
        if (number === 5) return 'V'
        if (number === 6) return 'VI'
        if (number === 7) return 'VII'
    }
    return ''
}

module.exports = getRomanNumerals