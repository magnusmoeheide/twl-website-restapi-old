const getArticles = "SELECT * FROM articles";
const getArticlesById = "SELECT * FROM articles WHERE id = $1";
const getNewestArticle = "SELECT * FROM articles WHERE publish_date IS NOT NULL ORDER BY publish_date DESC LIMIT 1";
const getArticleSections = "SELECT * FROM article_sections";
//onst getArticleWithInstructor = "SELECT articles.*, authors.name as instructor FROM articles JOIN authors ON articles.author_id = authors.id WHERE articles.id = $1";
const updateArticles = "UPDATE articles SET publish_date = $1, edit_date = $2, published = $3 WHERE id = $4";
const deleteArticles = "DELETE FROM articles WHERE id = $1";
const createArticles = "INSERT INTO articles (publish_date, edit_date, published) VALUES ($1, $2, $3) RETURNING *";

const getArticlesWithFirstSection = "SELECT articles.id, articles.publish_date, articles.published,"+ 
"article_sections.article_id, article_sections.section_number, article_sections.section_header "+
"FROM articles JOIN article_sections ON articles.id = article_sections.article_id WHERE article_sections.section_number = 1;";

const getArticlesWithAuthors = "SELECT a.id AS article_id, au.team_id AS author_id, t.name AS team_name "+
"FROM articles AS a JOIN articles_authors AS aa ON a.id = aa.article_id JOIN authors AS au ON aa.author_id = au.team_id "+
"JOIN team AS t ON au.team_id = t.id;";

const createAuthorForArticle = "INSERT INTO articles_authors (author_id, article_id) VALUES ($1, $2)";

//const deleteAuthorForArticle = "DELETE FROM articles_authors WHERE article_id = $1 AND author_id = $2;"

module.exports = {
    getArticles, 
    getArticlesById,
    getNewestArticle,

    getArticleSections,
   //getArticleWithInstructor,

    updateArticles,
    deleteArticles,
    createArticles,

    getArticlesWithFirstSection,

    getArticlesWithAuthors,
    createAuthorForArticle,
   // deleteAuthorForArticle
}