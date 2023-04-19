const pool = require('../../db');
const queries = require('./article_queries');

const getArticles = (req, res) => {
    pool.query(queries.getArticles, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getNewestArticle = (req, res) => {
  pool.query(queries.getNewestArticle, (error, results) => {
    if (error) throw error;
    const date = new Date(results.rows[0].publish_date);
    const formattedDate = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
    res.status(200).json(formattedDate);
  });
};


const getArticlesById = (req, res) => {
    const articleId = parseInt(req.params.id);
    pool.query(queries.getArticlesById, [articleId], (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    });
};

const getArticlesByAuthor = (req, res) => {
    const authorId = parseInt(req.params.id);
    pool.query(queries.getArticlesByAuthor, [authorId], (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    });
};

const getArticleSectionsByArticle = (req, res) => {
    const articleId = parseInt(req.params.id);
    pool.query(queries.getArticleSections, [articleId], (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    });
};

const getArticleWithInstructor = (req, res) => {
  const articleId = parseInt(req.params.id);
  pool.query(queries.getArticleWithInstructor, [articleId], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows[0]);
  });
};


  

module.exports = {
    getArticles, 
    getNewestArticle,
    getArticlesByAuthor,
    getArticlesById,

    getArticleSectionsByArticle,
    getArticleWithInstructor
}