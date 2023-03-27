const pool = require('../../db');
const queries = require('./grade_queries');

const getGrades = (req, res) => {
    pool.query(queries.getGrades, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getSchoolGrades = (req, res) => {
    const school_id = parseInt(req.params.school_id);
    pool.query(queries.getSchoolGrades, [school_id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getGradeById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getGradeById, [id], (error, results) =>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const addGrade = (req, res) => {
    const { name, school_id, school_year } = req.body;
    // check if name exists
    pool.query(queries.checkNameExists, [name], (error, results) => {
        if(results.rows.length) {
            res.send("Name already exists.")
        }

        // add Grade to db
        pool.query(queries.addGrade, [name, school_id, school_year], (error, results) => {
            if(error) throw error;
            res.status(201).send("Grade created succesfully!");
        })
    })
}

const deleteGrade = (req, res) => {
    const id = parseInt(req.params.id);
    // check if Grade exists
    pool.query(queries.getGradeById, [id], (error, results) => {
        const noGradeFound = !results.rows.length;
        if (noGradeFound) {
            res.send("Grade does not exist in the database!");
        }

        // delete Grade from db
        pool.query(queries.deleteGrade, [id], (error, results) => {
            if(error) throw error;
            res.status(200).send("Grade removed succesfully!")
        })
    })
}

const updateGrade = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    // check if Grade exists
    pool.query(queries.getGradeById, [id], (error, results) => {
        const noGradeFound = !results.rows.length;
        if (noGradeFound) {
            res.send("Grade does not exist in the database!");
        }

        pool.query(queries.updateGrade, [name, id], (error, results) => {
            if(error) throw error;
            res.status(200).send("Grade updated successfully!");
        })
    })
}

module.exports = {
    getGrades,
    getSchoolGrades,
    getGradeById,
    addGrade,
    deleteGrade,
    updateGrade,
}