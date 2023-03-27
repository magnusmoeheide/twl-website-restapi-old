const getClasses = "SELECT * FROM classes";
const getTeacherClasses = "SELECT * FROM classes WHERE teacher_id = $1";
const getSchoolClasses = "SELECT * FROM classes WHERE school_id = $1";
const getClassById = "SELECT * FROM classes WHERE id = $1";
const checkNameExists = "SELECT s FROM classes s WHERE s.name = $1";
const addClass = "INSERT INTO classes (name, grade_id, teacher_id, school_id) VALUES ($1, $2, $3, $4) RETURNING id";
const deleteClass = "DELETE FROM classes WHERE id = $1";
const updateClass = "UPDATE classes SET name = $1 WHERE id = $2";

module.exports = {
    getClasses,
    getTeacherClasses,
    getSchoolClasses,
    getClassById,
    checkNameExists,
    addClass,
    deleteClass,
    updateClass,
}