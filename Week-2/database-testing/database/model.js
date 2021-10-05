const db = require('./connection.js');

function getUsers() {
  return db.query('SELECT * FROM users');
}

module.exports = { createUser, deleteUser, getPosts };
