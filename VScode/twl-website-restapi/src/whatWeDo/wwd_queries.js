const getWhatWeDo = "SELECT * FROM what_we_do";
const updateWwd = "UPDATE what_we_do SET instructor = $1, opening_hours = $2, max_people = $3, published = $4 WHERE id = $5";
const getWwdById = "SELECT * FROM what_we_do WHERE id = $1";

module.exports = {
    getWhatWeDo, updateWwd, getWwdById
}