getRomanNumerals = (number) => {
    if (number) {
        if (number < 4) {
            return 'I'.repeat(number)
        }

        if (number === 4) return 'IV'

        if (number === 5) return 'V'

        if (number > 5) {
            return 'V' + 'I'.repeat(number - 5)
        }
    }
    return ''
}

module.exports = getRomanNumerals