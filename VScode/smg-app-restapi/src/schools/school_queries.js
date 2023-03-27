const getSchools = "SELECT * FROM schools";
const getSchoolById = "SELECT * FROM schools WHERE id = $1";
const checkNameExists = "SELECT s FROM schools s WHERE s.name = $1";
const addSchool = "INSERT INTO schools (name, admin_id) VALUES ($1, $2)";
const deleteSchool = "DELETE FROM schools WHERE id = $1";
const updateSchool = "UPDATE schools SET name = $1 WHERE id = $2";

module.exports = {
    getSchools,
    getSchoolById,
    checkNameExists,
    addSchool,
    deleteSchool,
    updateSchool,
}