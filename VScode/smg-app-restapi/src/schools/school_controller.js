const pool = require('../../db');
const queries = require('./school_queries');

const getSchools = (req, res) => {
    pool.query(queries.getSchools, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getSchoolById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getSchoolById, [id], (error, results) =>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const addSchool = (req, res) => {
    const { name, admin_id } = req.body;
    // check if name exists
    pool.query(queries.checkNameExists, [name], (error, results) => {
        if(results.rows.length) {
            res.send("Name already exists.")
        }

        // add school to db
        pool.query(queries.addSchool, [name, admin_id], (error, results) => {
            if(error) throw error;
            res.status(201).send("School created succesfully!");
        })
    })
}

const deleteSchool = (req, res) => {
    const id = parseInt(req.params.id);
    // check if School exists
    pool.query(queries.getSchoolById, [id], (error, results) => {
        const noSchoolFound = !results.rows.length;
        if (noSchoolFound) {
            res.send("School does not exist in the database!");
        }

        // delete school from db
        pool.query(queries.deleteSchool, [id], (error, results) => {
            if(error) throw error;
            res.status(200).send("School removed succesfully!")
        })
    })
}

const updateSchool = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    // check if School exists
    pool.query(queries.getSchoolById, [id], (error, results) => {
        const noSchoolFound = !results.rows.length;
        if (noSchoolFound) {
            res.send("School does not exist in the database!");
        }

        pool.query(queries.updateSchool, [name, id], (error, results) => {
            if(error) throw error;
            res.status(200).send("School updated successfully!");
        })
    })
}

module.exports = {
    getSchools,
    getSchoolById,
    addSchool,
    deleteSchool,
    updateSchool,
}