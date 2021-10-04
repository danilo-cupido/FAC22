const db = require('../database/connection.js');

function get(request, response) {
  db.query('SELECT text_content FROM blog_posts').then((result) => {
    const posts = result.rows;
    const userList = posts
      .map((post) => `<li>${post.text_content}</li>`)
      .join('');
    response.send(`<ul>${userList}</ul>`);
  });
}

module.exports = { get };
