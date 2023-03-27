const getTeachers = "SELECT * FROM teachers";
const getSchoolTeachers = "SELECT * FROM teachers WHERE school_id = $1"
const getTeacherById = "SELECT * FROM teachers WHERE id = $1";
const checkEmailExists = "SELECT s FROM teachers s WHERE s.email = $1";
const addTeacher = "INSERT INTO teachers (name, email, school_id) VALUES ($1, $2, $3)";
const deleteTeacher = "DELETE FROM teachers WHERE id = $1";
const updateTeacher = "UPDATE teachers SET name = $1 WHERE id = $2";

module.exports = {
    getTeachers,
    getSchoolTeachers,
    getTeacherById,
    checkEmailExists,
    addTeacher,
    deleteTeacher,
    updateTeacher,
}