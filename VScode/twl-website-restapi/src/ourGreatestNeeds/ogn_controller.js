const pool = require('../../db');
const queries = require('./ogn_queries');

const getOurGreatestNeeds = (req, res) => {
    pool.query(queries.getOurGreatestNeeds, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const updateOurGreatestNeeds = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, content, usd_price, kes_price } = req.body;
    
    pool.query(
      queries.updateOurGreatestNeeds, 
      [name, content, usd_price, kes_price, id], 
      (error, results) => {
        if(error) throw error;
        res.status(200).json({ message: "Ogn updated successfully!" });
      }
    );
  };
  


module.exports = {
    getOurGreatestNeeds, updateOurGreatestNeeds
}