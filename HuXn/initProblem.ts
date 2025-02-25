const students = ["wayne", "josh", "swag", "unchained", "damien"];

const searchStudent = (studentName: string) => {
  return students.find((name) => studentName === name);
};

console.log(searchStudent("wayne"));
