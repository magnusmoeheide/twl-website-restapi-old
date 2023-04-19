const getArticleSections = "SELECT * FROM article_sections";
const getArticleSectionsById = "SELECT * FROM article_sections where article_id = $1";


module.exports = {
    getArticleSections, 
    getArticleSectionsById
}