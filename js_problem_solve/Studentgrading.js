function calculateGrade(marks, attendance) {
    if (attendance > 90) {
        marks += 5;
    }

    if (marks >= 90) {
        return "Grade A" ;
    } else if (marks >= 80) {
        return "Grade B";
    } else if (marks >= 70) {
        return "Grade C";
    } else if (marks >= 60) {
        return "Grade D";
    } else {
        return "Grade F";
    }
}
console.log(calculateGrade(89,85))