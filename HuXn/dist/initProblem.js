"use strict";
const students = ["wayne", "josh", "swag", "unchained", "damien"];
const searchStudent = (studentName) => {
    return students.find((name) => studentName === name);
};
console.log(searchStudent("wayne"));
