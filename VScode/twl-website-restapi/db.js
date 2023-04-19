const Pool = require('pg').Pool
const pool = new Pool({
  user: 'superuser',
  host: 'localhost',
  database: 'twl_db',
  password: 'superuser',
  port: 5432,
});

module.exports = pool;