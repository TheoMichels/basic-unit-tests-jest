function fizzBuzz (n) {

    if(n == 0) {
        return "Can't divise by 0"
    }
    else {
        if(n%3 == 0 && n%5 != 0) {
            return "Fizz"
        }
        if(n%5 == 0 && n%3 != 0) {
            return "Buzz"
        }
        if(n%5 == 0 && n%3 == 0) {
            return "FizzBuzz"
        }
        else {
            return "False"
        }
    }
}

module.exports = fizzBuzz