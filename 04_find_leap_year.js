function isLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    } else {
        return false;
    }
}

let year = 2020;

if (isLeapYear(year)) {
    console.log(year + " is Leap Year!");
} else {
    console.log(year + " is not a Leap Year!");
}
