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
    if (number === 4) return x+l

    if (number === 5) return l

    if (number === 9) return x+c

    if ((number === 1 || number % 1 === 0) && number < 5) {
        return x.repeat(number)
    }

    if (number % 1 === 0 && number > 5) {
        return l + x.repeat(number - 5)
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
            return printDoubleDigits(numbersArray[0])+printSingleDigits(numbersArray[1])
        }   

        if (number === 100) return c

    }
    return ''
}

module.exports = getRomanNumerals