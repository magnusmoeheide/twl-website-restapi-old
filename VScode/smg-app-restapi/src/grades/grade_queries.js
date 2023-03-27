const getGrades = "SELECT * FROM grades";
const getSchoolGrades = "SELECT * FROM grades WHERE school_id = $1";
const getGradeById = "SELECT * FROM grades WHERE id = $1";
const checkNameExists = "SELECT s FROM grades s WHERE s.name = $1";
const addGrade = "INSERT INTO grades (name, school_id, school_year) VALUES ($1, $2, $3)";
const deleteGrade = "DELETE FROM grades WHERE id = $1";
const updateGrade = "UPDATE grades SET name = $1 WHERE id = $2";

module.exports = {
    getGrades,
    getSchoolGrades,
    getGradeById,
    checkNameExists,
    addGrade,
    deleteGrade,
    updateGrade,
}