const pool = require('../../db');
const queries = require('./admin_queries');

const getAdmins = (req, res) => {
    pool.query(queries.getAdmins, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getAdminById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getAdminById, [id], (error, results) =>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const addAdmin = (req, res) => {
    const { email } = req.body;
    // check if email exists
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if(results.rows.length) {
            res.send("Email already exists.")
        }

        // add email to db
        pool.query(queries.addAdmin, [email], (error, results) => {
            if(error) throw error;
            res.status(201).send("Admin created succesfully!");
        })
    })
}

const deleteAdmin = (req, res) => {
    const id = parseInt(req.params.id);
    // check if admin exists
    pool.query(queries.getAdminById, [id], (error, results) => {
        const noAdminFound = !results.rows.length;
        if (noAdminFound) {
            res.send("Admin does not exist in the database!");
        }

        // delete admin from db
        pool.query(queries.deleteAdmin, [id], (error, results) => {
            if(error) throw error;
            res.status(200).send("Admin removed succesfully!")
        })
    })
}

const updateAdmin = (req, res) => {
    const id = parseInt(req.params.id);
    const { email } = req.body;
    // check if admin exists
    pool.query(queries.getAdminById, [id], (error, results) => {
        const noAdminFound = !results.rows.length;
        if (noAdminFound) {
            res.send("Admin does not exist in the database!");
        }

        pool.query(queries.updateAdmin, [email, id], (error, results) => {
            if(error) throw error;
            res.status(200).send("Admin updated successfully!");
        })
    })
}

module.exports = {
    getAdmins,
    getAdminById,
    addAdmin,
    deleteAdmin,
    updateAdmin,
}