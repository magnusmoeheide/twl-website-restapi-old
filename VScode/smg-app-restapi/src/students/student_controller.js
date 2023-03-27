const pool = require('../../db');
const queries = require('./student_queries');

const getStudents = (req, res) => {
    pool.query(queries.getStudents, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getClassStudents= (req, res) => {
    const class_id = parseInt(req.params.class_id);
    pool.query(queries.getClassStudents, [class_id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById, [id], (error, results) =>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const addStudent = (req, res, next) => {
    const { name, class_id, grade_id, school_id } = req.body;
    // check if name exists
    pool.query(queries.checkNameExists, [name], (error, results) => {
        if (error) {
            return next(error);
        }
        if (results.rows.length) {
            return res.send("Name already exists.")
        } else {
            // add Student to db
            pool.query(queries.addStudent, [name, class_id, grade_id, school_id], (error, results) => {
                if (error) {
                    return next(error);
                }
            })
        }  
    })
}


const deleteStudent = (req, res) => {
    const id = parseInt(req.params.id);
    // check if Student exists
    pool.query(queries.getStudentById, [id], (error, results) => {
        const noStudentFound = !results.rows.length;
        if (noStudentFound) {
            res.send("Student does not exist in the database!");
        }

        // delete Student from db
        pool.query(queries.deleteStudent, [id], (error, results) => {
            if(error) throw error;
            res.status(200).send("Student removed succesfully!")
        })
    })
}

const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    // check if Student exists
    pool.query(queries.getStudentById, [id], (error, results) => {
        const noStudentFound = !results.rows.length;
        if (noStudentFound) {
            res.send("Student does not exist in the database!");
        }

        pool.query(queries.updateStudent, [name, id], (error, results) => {
            if(error) throw error;
            res.status(200).send("Student updated successfully!");
        })
    })
}

module.exports = {
    getStudents,
    getClassStudents,
    getStudentById,
    addStudent,
    deleteStudent,
    updateStudent,
}