getRomanNumerals = (number) => {
    if (number) {
        if (number === 1) return 'I'
        if (number === 2) return 'II'
        if (number === 3) return 'III'
        if (number === 4) return 'IV'
        if (number === 5) return 'V'
        if (number === 6) return 'VI'
    }
    return ''
}

module.exports = getRomanNumerals