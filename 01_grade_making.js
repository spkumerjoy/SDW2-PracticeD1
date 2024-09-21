function makingGrade(mark) {
    if (mark >= 90 && mark <= 100) {
        return "Golden A+";
    } else if (mark >= 80 && mark < 90) {
        return "A+";
    } else if (mark >= 70 && mark < 80) {
        return "A";
    } else if (mark >= 60 && mark < 70) {
        return "A-";
    } else if (mark >= 50 && mark < 60) {
        return "B";
    } else if (mark >= 40 && mark < 50) {
        return "C";
    } else if (mark >= 33 && mark < 40) {
        return "D";
    } else if (mark >= 0 && mark < 33) {
        return "F";
    } else {
        return "Invalid Marks";
    }
}

let mark = 65;

console.log("Your Grade is: " + makingGrade(mark));
