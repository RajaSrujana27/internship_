function isEligibleForJob(age, experience, qualification) {
    return age >= 21 && age <= 55 && experience >= 2 && qualification === "Bachelor's Degree";
}
console.log(isEligibleForJob(25, 3, "Bachelor's Degree"));
