const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    pasword: 'Restin@2137'
});

module.exports = pool.promise();