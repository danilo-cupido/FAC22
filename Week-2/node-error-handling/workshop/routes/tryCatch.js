// Challenge
// Let’s use try..catch to handle errors on a Node server.

// Download the starter files, cd in, run npm install
// Run npm run dev to start the server on http://localhost:3000
// Visit http://localhost:3000/try-catch. You should see Express’ default error response
// Use try..catch in the tryCatch route handler to catch the error and send your own response to the browser
// The response should have a 500 status code and a message of Server error
// Don’t fix the mistake in the tryCatch handler (it’s deliberate to simulate a real error)

// const layout = require("../layout.js");

// function get(request, response) {
//   const html = layot(`<h1>Gonna error</h1>`);

//   response.send(html);
// }

// module.exports = { get };

const layout = require('../layout.js');

function get(request, response) {
  try {
    const html = layot(`<h1>Gonna error</h1>`);
    response.send(html);
  } catch (error) {
    console.error(error);
    response.status(500).send(`<h1>Server error</h1>`);
  }
}

module.exports = { get };
