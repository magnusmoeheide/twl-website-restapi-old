const getTeam = "SELECT * FROM team";
const updateTeam = "UPDATE team SET name = $1, role = $2, board = $3 WHERE id = $4";
const getTeamById = "SELECT * FROM team WHERE id = $1";
const deleteTeam = "DELETE FROM team WHERE id = $1";
const createTeam = "INSERT INTO team (name, role, board) VALUES ($1, $2, $3) RETURNING *";


module.exports = {
    getTeam, updateTeam, getTeamById, deleteTeam, createTeam
}