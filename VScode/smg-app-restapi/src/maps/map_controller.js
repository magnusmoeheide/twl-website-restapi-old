const pool = require('../../db');
const queries = require('./map_queries');

const getMaps = (req, res) => {
    pool.query(queries.getMaps, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getMapById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getMapById, [id], (error, results) =>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const addMap = (req, res) => {
    const { name, class_id, grade_id, school_id } = req.body;
    // check if name exists
    pool.query(queries.checkNameExists, [name], (error, results) => {
        if(results.rows.length) {
            res.send("Name already exists.")
        }

        // add Map to db
        pool.query(queries.addMap, [name, class_id, grade_id, school_id], (error, results) => {
            if(error) throw error;
            res.status(201).send("Map created succesfully!");
        })
    })
}

const deleteMap = (req, res) => {
    const id = parseInt(req.params.id);
    // check if Map exists
    pool.query(queries.getMapById, [id], (error, results) => {
        const noMapFound = !results.rows.length;
        if (noMapFound) {
            res.send("Map does not exist in the database!");
        }

        // delete Map from db
        pool.query(queries.deleteMap, [id], (error, results) => {
            if(error) throw error;
            res.status(200).send("Map removed succesfully!")
        })
    })
}

const updateMap = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    // check if Map exists
    pool.query(queries.getMapById, [id], (error, results) => {
        const noMapFound = !results.rows.length;
        if (noMapFound) {
            res.send("Map does not exist in the database!");
        }

        pool.query(queries.updateMap, [name, id], (error, results) => {
            if(error) throw error;
            res.status(200).send("Map updated successfully!");
        })
    })
}

module.exports = {
    getMaps,
    getMapById,
    addMap,
    deleteMap,
    updateMap,
}