const pool = require('../../db');
const queries = require('./article_sections_queries');

const getArticleSections = (req, res) => {
    pool.query(queries.getArticleSections, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getArticleSectionsById = (req, res) => {
  const articleId = parseInt(req.params.id);
  pool.query(queries.getArticleSectionsById, [articleId], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};


module.exports = {
    getArticleSections, getArticleSectionsById
}