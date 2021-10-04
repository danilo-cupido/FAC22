const db = require('../database/connection.js');

// function get(request, response) {
//   db.query('SELECT * FROM users').then((result) => {
//     console.log(result);
//   });
//   response.send(`<h1>Hello world</h1>`);
// }

function get(request, response) {
  db.query(
    'SELECT users.username, blog_posts.text_content FROM users INNER JOIN blog_posts ON blog_posts.user_id = users.id '
  ).then((result) => {
    const users = result.rows;
    const userList = users
      .map((user) => `<li>${user.username} : ${user.text_content}</li>`)
      .join('');
    response.send(`<ul>${userList}</ul>`);
  });
}

module.exports = { get };
