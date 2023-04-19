const pool = require('../../db');
const queries = require('./team_queries');

const getTeam = (req, res) => {
  pool.query(queries.getTeam, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const updateTeam = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, role, board } = req.body;
  
  pool.query(
    queries.updateTeam, 
    [name, role, board, id], 
    (error, results) => {
      if (error) throw error;
      res.status(200).json({ message: "Team member updated successfully!" });
    }
  );
};

const getTeamById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getTeamById, [id], (error, results) =>{
      if(error) throw error;
      res.status(200).json(results.rows);
  })
}

const deleteTeam = (req, res) => {
  const id = parseInt(req.params.id);
  // check if Teacher exists
  pool.query(queries.getTeamById, [id], (error, results) => {
      const noTeamFound = !results.rows.length;
      if (noTeamFound) {
          res.send("Team member does not exist in the database!");
      }

      // delete team member from db
      pool.query(queries.deleteTeam, [id], (error, results) => {
          if(error) throw error;
          res.status(200).send("Team member removed succesfully!")
      })
  })
}

const createTeam = (req, res) => {
  const { name, role, board } = req.body;

  // Add Team member to db
  pool.query(queries.createTeam, [name, role, board], (error, results) => {
    if (error) throw error;
    res.status(201).json(results.rows[0]);
  });
};



module.exports = {
  getTeam, 
  updateTeam,
  getTeamById,
  deleteTeam,
  createTeam
};
