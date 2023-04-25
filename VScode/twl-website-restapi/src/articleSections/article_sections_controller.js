const pool = require('../../db');
const queries = require('./article_sections_queries');

const getArticleSections = (req, res) => {
    pool.query(queries.getArticleSections, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getArticleSectionsById = (req, res) => {
  const id = parseInt(req.params.id);
  //console.log('id:', id);
  pool.query(queries.getArticleSectionsById, [id], (error, results) => {
    if (error) throw error;
    //(results.rows); // log the data to the terminal
    res.status(200).json(results.rows);
  });
};

const updateArticleSectionsById = (req, res) => {
  const { section_header, section_text, section_number } = req.body;
  //console.log("Data received in API:", { section_header, section_text, section_number });
  const { id } = req.params; // Extract the ID from the URL parameters
  pool.query(
    queries.updateArticleSectionsById,
    [section_header, section_text, section_number, id],
    (error, results) => {
      if (error) throw error;
      res.status(200).send(`Section with ID ${id} updated successfully.`);
    }
  );
};

const deleteArticleSectionsById = (req, res) => {
  const id = parseInt(req.params.id);
  // check if Section exists
  pool.query(queries.getArticleSectionsById, [id], (error, results) => {
    if (error) throw error;

    pool.query(queries.deleteArticleSectionsById, [id], (error, results) => {
      if (error) throw error;

      res.status(200).json({ message: 'Section removed succesfully!' });
    })
  })
}



const createArticleSectionsById = (req, res) => {
  const { section_number, section_header, section_text, article_id } = req.body;

  // Check if article_id is an integer
  if (!Number.isInteger(article_id)) {
    res.status(400).send('article_id must be an integer');
    return;
  }

  // Add section to db
  pool.query(queries.createArticleSectionsById, [section_number, section_header, section_text, article_id], (error, results) => {
    if (error) throw error;
    res.status(201).json(results.rows[0]);
  });
};



module.exports = {
    getArticleSections, getArticleSectionsById, updateArticleSectionsById, deleteArticleSectionsById, createArticleSectionsById
}