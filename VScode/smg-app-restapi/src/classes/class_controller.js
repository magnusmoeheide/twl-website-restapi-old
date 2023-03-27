const pool = require('../../db');
const queries = require('./class_queries');
const controller = require('../students/student_controller')

const getClasses = (req, res) => {
    pool.query(queries.getClasses, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getTeacherClasses = (req,res) => {
    const teacher_id = parseInt(req.params.teacher_id);
    pool.query(queries.getTeacherClasses, [teacher_id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const getSchoolClasses = (req,res) => {
    const school_id = parseInt(req.params.school_id);
    pool.query(queries.getSchoolClasses, [school_id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const getClassById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getClassById, [id], (error, results) =>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const addClass = (req, res) => {
    const { name, grade_id, teacher_id, school_id, studentList } = req.body;
    // check if name exists
    pool.query(queries.checkNameExists, [name], (error, results) => {
        if(results.rows.length) {
            res.send("Name already exists.")
        }

        // add class to db
        pool.query(queries.addClass, [name, grade_id, teacher_id, school_id], (error, results) => {
            if(error) throw error;
            res.status(201).send("Class created succesfully!");
            const class_id = results.rows[0].id;
            
            if (studentList) {
                // takes an array of promises and waits till they are resolved
                Promise.all(
                    studentList.map(name => {
                        const studentObject = { 
                            name: name,
                            class_id: class_id,
                            grade_id: grade_id,
                            school_id: school_id
                        };
                        return controller.addStudent({body: studentObject});
                    })
                ).then(() => {
                    console.log('All students added');
                }).catch((error) => {
                    console.log('Error adding students', error);
                });
              }
        })
    })
}

const deleteClass = (req, res) => {
    const id = parseInt(req.params.id);
    // check if Class exists
    pool.query(queries.getClassById, [id], (error, results) => {
        const noClassFound = !results.rows.length;
        if (noClassFound) {
            res.send("Class does not exist in the database!");
        }

        // delete class from db
        pool.query(queries.deleteClass, [id], (error, results) => {
            if(error) throw error;
            res.status(200).send("Class removed succesfully!")
        })
    })
}

const updateClass = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    // check if class exists
    pool.query(queries.getClassById, [id], (error, results) => {
        const noClassFound = !results.rows.length;
        if (noClassFound) {
            res.send("Class does not exist in the database!");
        }

        pool.query(queries.updateClass, [name, id], (error, results) => {
            if(error) throw error;
            res.status(200).send("Class updated successfully!");
        })
    })
}

module.exports = {
    getClasses,
    getTeacherClasses,
    getSchoolClasses,
    getClassById,
    addClass,
    deleteClass,
    updateClass,
}