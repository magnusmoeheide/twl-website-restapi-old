const getAdmins = "SELECT * FROM admins";
const getAdminById = "SELECT * FROM admins WHERE id = $1";
const checkEmailExists = "SELECT s FROM admins s WHERE s.email = $1";
const addAdmin = "INSERT INTO admins (email) VALUES ($1)";
const deleteAdmin = "DELETE FROM admins WHERE id = $1";
const updateAdmin = "UPDATE admins SET name = $1 WHERE id = $2";

module.exports = {
    getAdmins,
    getAdminById,
    checkEmailExists,
    addAdmin,
    deleteAdmin,
    updateAdmin,
}