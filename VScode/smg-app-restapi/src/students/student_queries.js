const getStudents = "SELECT * FROM students";
const getClassStudents = "SELECT * FROM students WHERE class_id = $1";
const getStudentById = "SELECT * FROM students WHERE id = $1";
const checkNameExists = "SELECT s FROM students s WHERE s.name = $1";
const addStudent = "INSERT INTO students (name, class_id, grade_id, school_id) VALUES ($1, $2, $3, $4)";
const deleteStudent = "DELETE FROM students WHERE id = $1";
const updateStudent = "UPDATE students SET name = $1 WHERE id = $2";

module.exports = {
    getStudents,
    getClassStudents,
    getStudentById,
    checkNameExists,
    addStudent,
    deleteStudent,
    updateStudent,
}