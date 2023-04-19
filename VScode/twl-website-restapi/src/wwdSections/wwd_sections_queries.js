const getWwdSections = "SELECT * FROM wwd_sections";
const getWwdSectionsById = "SELECT wwd_sections.* " +
                       "FROM wwd_sections " +
                       "JOIN what_we_do " +
                       "ON wwd_sections.wwd_id = what_we_do.id " +
                       "WHERE what_we_do.id = $1;";

const updateWwdSectionsById = "UPDATE wwd_sections " +
                       "SET section_header = $1, section_text = $2, section_number = $3 " +
                       "WHERE id = $4 " 

const createWwdSectionsById = "INSERT INTO wwd_sections (section_number, section_header, section_text, wwd_id) VALUES ($1, $2, $3, $4) RETURNING *";           

const deleteWwdSectionsById = "DELETE FROM wwd_sections WHERE id = $1";


module.exports = {
  getWwdSections, getWwdSectionsById, updateWwdSectionsById, createWwdSectionsById, deleteWwdSectionsById

};
