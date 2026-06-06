const student = ["arjun", "sachin", "rohit", "virat"];
const marks = [90, 85, 95, 80]; 
//step 1 : write a function that says if someone if passsed or not
function hasPassed(marks) {
  return marks >= 40;
}

for (let i = 0; i < student.length; i++) {
    const result = hasPassed(marks[i]) ? "passed" : "failed";
    console.log(student[i] + " has " + result);
}