const pool = require('../../db');
const queries = require('./author_queries');

const getAuthors = (req, res) => {
    pool.query(queries.getAuthors, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getAuthorById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getAuthorById, [id], (error, results) =>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}


module.exports = {
    getAuthors, getAuthorById
}