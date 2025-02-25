const students = ["wayne", "josh", "swag", "unchained", "damien"];

const searchStudent = (allStudents, studentName) => {
  return allStudents.find((name) => studentName === name);
};

console.log(searchStudent(students, "wayne"));
