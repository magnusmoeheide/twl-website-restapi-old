const getAuthors = "SELECT * FROM authors JOIN team ON team.id = authors.team_id";
const getAuthorById = "SELECT * FROM authors WHERE id = $1";

module.exports = {
    getAuthors, getAuthorById
}