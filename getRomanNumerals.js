getRomanNumerals = (number) => {
    if (number) {
        if (number < 4) {
            return 'I'.repeat(number)
        }

        if (number === 4) return 'IV'

        if (number === 5) return 'V'

        if (number === 9) return 'IX'

        if (number === 40) return 'XL'

        if (number === 50) return 'L'

        if (number > 5 && number < 9) {
            return 'V' + 'I'.repeat(number - 5)
        }

        if ((number === 10 || number % 10 === 0) && number < 50) {
            return 'X'.repeat(number / 10)
        }

        if (number % 10 === 0 && number > 50) {
            return 'L' + 'X'.repeat((number - 50) / 10)
        }

    }
    return ''
}

module.exports = getRomanNumerals