const pool = require('../../db');
const queries = require('./wwd_queries');

const getWhatWeDo = (req, res) => {
    pool.query(queries.getWhatWeDo, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getWwdById = (req, res) => {
  const articleId = parseInt(req.params.id);
  pool.query(queries.getWwdById, [articleId], (error, results) => {
    if (error) throw error;
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

const deleteWwd = (req, res) => {
  const id = parseInt(req.params.id);
  // check if Wwd exists
  pool.query(queries.getWwdById, [id], (error, results) => {
      const noWwdFound = !results.rows.length;
      if (noWwdFound) {
          res.send("Wwd does not exist in the database!");
      }

      // delete wwd from db
      pool.query(queries.deleteWwd, [id], (error, results) => {
          if(error) throw error;
          res.status(200).send("Wwd removed succesfully!")
      })
  })
}

const createWwd = (req, res) => {
  const { name, instructor, max_people, opening_hours } = req.body;

  // Add Wwd member to db
  pool.query(queries.createWwd, [name, instructor, max_people, opening_hours], (error, results) => {
    if (error) throw error;
    res.status(201).json(results.rows[0]);
  });
};


module.exports = {
    getWhatWeDo, updateWwd, getWwdById, createWwd, deleteWwd
}