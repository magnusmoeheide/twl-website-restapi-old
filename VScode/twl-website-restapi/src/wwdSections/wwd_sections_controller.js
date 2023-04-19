const pool = require('../../db');
const queries = require('./wwd_sections_queries');


const getWwdSections = (req, res) => {
  pool.query(queries.getWwdSections, (error, results) => {
      if(error) throw error;
      res.status(200).json(results.rows);
  });
};

const getWwdSectionsById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getWwdSectionsById, [id], (error, results) =>{
      if(error) throw error;
      res.status(200).json(results.rows);
  })
};

const updateWwdSectionsById = (req, res) => {
  const { section_header, section_text, section_number } = req.body;
  console.log("Data received in API:", { section_header, section_text, section_number });
  const { id } = req.params; // Extract the ID from the URL parameters
  pool.query(
    queries.updateWwdSectionsById,
    [section_header, section_text, section_number, id],
    (error, results) => {
      if (error) throw error;
      res.status(200).send(`Section with ID ${id} updated successfully.`);
    }
  );
};

const createWwdSectionsById = (req, res) => {
  const { section_number, section_header, section_text, wwd_id } = req.body;

  // Check if wwd_id is an integer
  if (!Number.isInteger(wwd_id)) {
    res.status(400).send('wwd_id must be an integer');
    return;
  }

  // Add section to db
  pool.query(queries.createWwdSectionsById, [section_number, section_header, section_text, wwd_id], (error, results) => {
    if (error) throw error;
    res.status(201).json(results.rows[0]);
  });
};


const deleteWwdSectionsById = (req, res) => {
  const id = parseInt(req.params.id);
  // check if Section exists
  pool.query(queries.getWwdSectionsById, [id], (error, results) => {
      
      pool.query(queries.deleteWwdSectionsById, [id], (error, results) => {
          if(error) throw error;
          res.status(200).send("Section removed succesfully!")
      })
  })
}

module.exports = {
    getWwdSections, getWwdSectionsById, updateWwdSectionsById, createWwdSectionsById, deleteWwdSectionsById
}