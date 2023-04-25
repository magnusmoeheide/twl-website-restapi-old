const getArticleSections = "SELECT * FROM article_sections";
const getArticleSectionsById = "SELECT article_sections.* " +
                       "FROM article_sections " +
                       "JOIN articles " +
                       "ON article_sections.article_id = articles.id " +
                       "WHERE articles.id = $1;";

const updateArticleSectionsById = "UPDATE article_sections " +
                       "SET section_header = $1, section_text = $2, section_number = $3 " +
                       "WHERE id = $4 " 

const createArticleSectionsById = "INSERT INTO article_sections (section_number, section_header, section_text, article_id) VALUES ($1, $2, $3, $4) RETURNING *";           

const deleteArticleSectionsById = "DELETE FROM article_sections WHERE id = $1";

module.exports = {
    getArticleSections, 
    getArticleSectionsById,
    updateArticleSectionsById,
    deleteArticleSectionsById,
    createArticleSectionsById
}