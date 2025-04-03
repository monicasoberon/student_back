const basedatos = require('../database/db');

const getData = (req, res) => {
    const data = basedatos.getAllStudents();  // Fetch all students

    if (!data || data.length === 0) {  // Check if data is empty
        return res.status(404).json({ message: 'No students found' });
    }

    const studentsWithStatus = [];  // Empty array to store students with their status

    // Loop through each student using forEach
    data.forEach(student => {
        let status = '';

        if (student.final_grade >= 7 && student.debt === 0) {
            status = 'Aprobado';
        } else if (student.final_grade < 7 && student.debt > 0) {
            status = 'Expulsado';
        } else if (student.final_grade < 7 && student.debt === 0) {
            status = 'Pendiente';
        } else if (student.final_grade >= 7 && student.debt > 0) {
            status = 'Reestructura';
        }

        // Push the student data with the status into the new array
        studentsWithStatus.push({
            matricula: student.id,
            name: student.name,
            status: status
        });
    });

    // Respond with the list of students and their statuses
    res.status(200).json(studentsWithStatus);
}

module.exports = { getData };