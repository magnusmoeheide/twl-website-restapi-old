const Pool = require('pg').Pool

const pool = new Pool({
  user: 'smg_admin',
  host: 'localhost',
  database: 'smg_db',
  password: 'mc1233',
  port: 5432,
});

module.exports = pool;