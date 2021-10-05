// Challenge 2: modularise queries
// Move the rest of the DB queries into model.js.
// Make sure all the tests keep passing!

// Write a createUser function to insert new users
// Write a deleteUser function to delete a user
// Write a getPosts function to select all the blog posts
// Refactor your route handlers to use the new model functions

const db = require('./connection.js');

function getUsers() {
  return db.query('SELECT * FROM users').then((result) => result.rows);
}

function createUser(user) {
  const insert_user = /*sql*/ `
    INSERT INTO users(username, age, location) VALUES($1, $2, $3)
  `;
  const { username, age, location } = user;
  return db.query(insert_user, [username, age, location]);
}

function deleteUser(id) {
  const delete_user = /*sql*/ `
    DELETE FROM users WHERE id = $1
  `;
  return db.query(delete_user, [id]);
}

function getPosts() {
  const select_posts = /*sql*/ `
    SELECT blog_posts.text_content, users.username
    FROM blog_posts INNER JOIN users
    ON blog_posts.user_id = users.id
    ORDER BY blog_posts.id DESC
  `;
  return db.query(select_posts).then((result) => result.rows);
}

module.exports = { getUsers, createUser, deleteUser, getPosts };
