const getWhatWeDo = "SELECT * FROM what_we_do";
const getWwdById = "SELECT * FROM what_we_do WHERE id = $1";
const updateWwd = "UPDATE what_we_do SET instructor = $1, opening_hours = $2, max_people = $3, published = $4 WHERE id = $5";
const createWwd = "INSERT INTO what_we_do (name, instructor, max_people, opening_hours) VALUES ($1, $2, $3, $4) RETURNING *";
const deleteWwd = "DELETE FROM what_we_do WHERE id = $1";

module.exports = {
    getWhatWeDo, getWwdById, updateWwd, createWwd, deleteWwd
}