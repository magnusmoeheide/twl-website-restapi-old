const getMaps = "SELECT * FROM maps";
const getMapById = "SELECT * FROM maps WHERE id = $1";
const checkNameExists = "SELECT s FROM maps s WHERE s.name = $1";
const addMap = "INSERT INTO maps (name, class_id, grade_id, school_id) VALUES ($1, $2, $3, $4)";
const deleteMap = "DELETE FROM maps WHERE id = $1";
const updateMap = "UPDATE maps SET name = $1 WHERE id = $2";

module.exports = {
    getMaps,
    getMapById,
    checkNameExists,
    addMap,
    deleteMap,
    updateMap,
}