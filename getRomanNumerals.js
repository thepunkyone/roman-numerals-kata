const i = 'I'
const v = 'V'
const x = 'X'
const l = 'L'
const c = 'C'
const d = 'D'
const m = 'M'

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

    if (number < 5) {
        return x.repeat(number)
    }

    if (number > 5) {
        return l + x.repeat(number - 5)
    }

    return ''
}

printTripleDigits = (number) => {
    if (number === 4) return c+d

    if (number === 5) return d

    if (number === 9) return c+m

    if (number < 5) {
        return c.repeat(number)
    }

    if (number > 5) {
        return d + c.repeat(number - 5)
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

        if (numbersArray.length === 3) {
            return printTripleDigits(numbersArray[0])+printDoubleDigits(numbersArray[1])+printSingleDigits(numbersArray[2])
        }

        if (number === 1000) {
            return 'M'
        }

    }
    return ''
}

module.exports = getRomanNumerals