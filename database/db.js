// fakeDb.js

let students = [
    { id: 1, name: 'John Doe', final_grade: 7.5, debt: 0 },
    { id: 2, name: 'Jane Smith', final_grade: 7.0, debt: 100 },
    { id: 3, name: 'Mark Brown', final_grade: 6.0, debt: 50 },
    { id: 4, name: 'Lucy Green', final_grade: 5.0, debt: 0 },
  ];
  
  // Function to get all students
  const getAllStudents = () => students;
  
  
  module.exports = { getAllStudents };