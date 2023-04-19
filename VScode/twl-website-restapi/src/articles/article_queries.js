const getArticles = "SELECT * FROM articles";
const getArticlesById = "SELECT * FROM articles WHERE article_id = $1";
const getArticlesByAuthor = "SELECT * FROM articles WHERE author_id = $1";
const getNewestArticle = "SELECT * FROM articles ORDER BY publish_date DESC LIMIT 1";
const getArticleSections = "SELECT * FROM article_sections";
const getArticleWithInstructor = "SELECT articles.*, authors.name as instructor FROM articles JOIN authors ON articles.author_id = authors.id WHERE articles.article_id = $1";



module.exports = {
    getArticles, 
    getArticlesById,
    getArticlesByAuthor,
    getNewestArticle,

    getArticleSections,
    getArticleWithInstructor
}