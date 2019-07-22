const i = 'I'
const v = 'V'
const x = 'X'
const l = 'L'
const c = 'C'

printSingleDigits = (number) => {

    if (number < 4) {
        return i.repeat(number)
    }

    if (number === 4) return i+v

    if (number === 5) return v

    if (number === 9) return i+x

    if (number > 5 && number < 9) {
        return v + i.repeat(number - 5)
    }

    return ''
}

printDoubleDigits = (number) => {
    if (number === 40) return x+l

    if (number === 50) return l

    if (number === 90) return x+c

    if ((number === 10 || number % 10 === 0) && number < 50) {
        return x.repeat(number / 10)
    }

    if (number % 10 === 0 && number > 50) {
        return l + x.repeat((number - 50) / 10)
    }

    return ''
}

getRomanNumerals = (number) => {
    if (number) {
        const numbersArray = number.toString().split('').map(item => Number(item))

        if (numbersArray.length === 1) {
            return printSingleDigits(number)
        }

        if (numbersArray.length === 2) {
            return printDoubleDigits(number);
        }   

        if (number === 100) return c

    }
    return ''
}

module.exports = getRomanNumerals