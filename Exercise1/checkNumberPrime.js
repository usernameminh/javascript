function isPrimeNumber(number) {
    if (number < 2) {
        return false
    } else if (number === 2) {
        return true
    } else if (number % 2 === 0) {
        return false
    } else {
        for (var i = 3; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false
            }
        }

        return true
    }
}


function checkPrimeNumber(number) {
    if (isPrimeNumber(number)) {
        console.log(`${number} là số nguyên tố.`)
        return
    }
    console.log(`${number} không phải là số nguyên tố.`)
}

checkPrimeNumber(1)
checkPrimeNumber(2)
checkPrimeNumber(3)
checkPrimeNumber(4)
checkPrimeNumber(7)