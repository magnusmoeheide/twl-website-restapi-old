const getAuthors = "SELECT * FROM authors";
const getAuthorById = "SELECT * FROM authors WHERE id = $1";

module.exports = {
    getAuthors, getAuthorById
}