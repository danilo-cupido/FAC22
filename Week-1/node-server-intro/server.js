// CREATING SERVER
// We can create a new server object using the express module:

const express = require('express');

const server = express();

// ----------------------------------------------------------------

// HANDLING REQUESTS
// Our server currently does nothing. We need to add a “route”.
// This is a function that will be run whenever the server receives a request to a specific path.

// The server object has methods representing all the HTTP verbs (GET, POST etc).
// These methods take two arguments: the path to match and a handler function.

// server.get('/', (request, response) => {
//   response.send('hello');
// });

// server.get('/', (request, response) => {
//   response.status(404);
//   response.send('hello');
// });

// server.get('/', (request, response) => {
//   response.status(404).send('hello');
// });

// server.get('/', (request, response) => {
//   // response.set('x-fake-header', 'greeting the user');
//   response
//     .set({
//       'x-fake-header': 'greeting the user',
//       'x-another-header': 'another value',
//     })
//     .send('hello');
// });

// server.get('/', (request, response) => {
//   response.send('<h1>Hello everyone</h1>');
// });

// server.get('/', (request, response) => {
//   const time = new Date().toLocaleTimeString();
//   response.send(`<h1>Hello, it's ${time}</h1>`);
// });

server.get('/json', (request, response) => {
  response.send({ message: 'Hello' });
});

server.get('/redirects', (request, response) => {
  response.redirect('/');
});

server.get('/users/:name', (request, response) => {
  const name = request.params.name;
  response.send(`<h1>Hello ${name}</h1>`);
});

// server.use((request, response) => {
//   response.status(404).send('<h1>Not found</h1>');
// });

// server.get('/', (request, response, next) => {
//   console.log(request.method + ' ' + request.url);
//   next();
// });

// server.get('/', (request, response) => {
//   response.send('<h1>Hello</h1>');
// });

function logger(request, response, next) {
  console.log(request.method + ' ' + request.url);
  next();
}

server.get('/', logger, (request, response) => {
  response.send('<h1>Hello</h1>');
});

server.use(logger);

const PORT = 3000;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
