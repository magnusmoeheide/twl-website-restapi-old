const pool = require('../../db');
const queries = require('./wwd_queries');

const getWhatWeDo = (req, res) => {
    pool.query(queries.getWhatWeDo, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const updateWwd = (req, res) => {
    const id = parseInt(req.params.id);
    const { instructor, opening_hours, max_people, published } = req.body;
    
    pool.query(
      queries.updateWwd, 
      [instructor, opening_hours, max_people, published, id], 
      (error, results) => {
        if (error) throw error;
        res.status(200).json({ message: "What we do updated successfully!",instructor, opening_hours, max_people, published });
      }
    );
  };

const getWwdById = (req, res) => {
    const articleId = parseInt(req.params.id);
    pool.query(queries.getWwdById, [articleId], (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    });
};

module.exports = {
    getWhatWeDo, updateWwd, getWwdById
}