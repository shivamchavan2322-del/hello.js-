const express = require("express");

const app = express();
const PORT = process.env.PORT || 3002;

const students = [
  { name: "Abdullah", marks: 55 },
  { name: "shiv", marks: 82 },
  { name: "bruh", marks: 48 },
];

// Route 1 - home
app.get("/", (req, res) => {
  res.send("Student API is running!");
});

// Route 2 - all students
app.get("/students", (req, res) => {
  res.json(students);
});

// Route 3 - only students who passed
app.get("/passed", (req, res) => {
  const passed = students.filter((student) => student.marks >= 60);
  res.json(passed);
});

app.listen(PORT, () => {
  console.log(`Student API running on port ${PORT}`);
});
