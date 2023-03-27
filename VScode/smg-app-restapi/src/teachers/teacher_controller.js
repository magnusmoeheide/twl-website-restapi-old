const pool = require('../../db');
const queries = require('./teacher_queries');

const getTeachers = (req, res) => {
    pool.query(queries.getTeachers, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getSchoolTeachers = (req, res) => {
    const school_id = parseInt(req.params.school_id);
    pool.query(queries.getSchoolTeachers, [school_id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getTeacherById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getTeacherById, [id], (error, results) =>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const addTeacher = (req, res) => {
    const { name, email, school_id } = req.body;
    // check if email exists
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if(results.rows.length) {
            res.send("Email already exists.")
        }

        // add Teacher to db
        pool.query(queries.addTeacher, [name, email, school_id], (error, results) => {
            if(error) throw error;
            res.status(201).send("Teacher created succesfully!");
        })
    })
}

const deleteTeacher = (req, res) => {
    const id = parseInt(req.params.id);
    // check if Teacher exists
    pool.query(queries.getTeacherById, [id], (error, results) => {
        const noTeacherFound = !results.rows.length;
        if (noTeacherFound) {
            res.send("Teacher does not exist in the database!");
        }

        // delete teacher from db
        pool.query(queries.deleteTeacher, [id], (error, results) => {
            if(error) throw error;
            res.status(200).send("Teacher removed succesfully!")
        })
    })
}

const updateTeacher = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    // check if Teacher exists
    pool.query(queries.getTeacherById, [id], (error, results) => {
        const noTeacherFound = !results.rows.length;
        if (noTeacherFound) {
            res.send("Teacher does not exist in the database!");
        }

        pool.query(queries.updateTeacher, [name, id], (error, results) => {
            if(error) throw error;
            res.status(200).send("Teacher updated successfully!");
        })
    })
}

module.exports = {
    getTeachers,
    getSchoolTeachers,
    getTeacherById,
    addTeacher,
    deleteTeacher,
    updateTeacher,
}