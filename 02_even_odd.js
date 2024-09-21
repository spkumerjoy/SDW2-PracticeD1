function oddEven(num) {
    if (num % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

let num = 518;

console.log("This number is: " + oddEven(num));
