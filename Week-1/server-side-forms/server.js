const express = require('express');
const dogs = require('./dogs.js');

const server = express();

// ------------------------------------------------------

// Challenge 1: server setup
// 1. Add a route for the homepage (GET /)
// 2. Return an HTML string containing a <ul>
// 3. Each <li> in the list should contain a dogs name

// server.get('/', (req, res) => {
//   let items = '';
//   for (const dog of Object.values(dogs)) {
//     items += `<li>${dog.name}</li>`;
//   }
//   const list = `<ul>${items}</ul>`;
//   res.send(list);
// });

// ------------------------------------------------------

// Challenge 2: search
// Let’s add some search functionality to our dogs page.
// Express automatically parses the “search” part of the URL for each request.
// You can access this object at request.query.
// For example our request above would result in a query object like:

// { myMessage: "whatevertheusertyped", }

// 1. Add a search form to the homepage (with a single input)
// 2. Retrieve the user-submitted value on the server
// 3. Filter the list of dogs based on the user-submitted value
// 4. Make sure the full list still displays if there’s no search value

// E.g. if the user searches for “o” the list should only include “rover” and “spot”
// (since they both contain the letter “o”).

// server.get('/', (req, res) => {
//   const searchResult = req.query.userSearch || '';
//   let items = '';
//   for (const dog of Object.values(dogs)) {
//     const match = dog.name.toLowerCase().includes(searchResult.toLowerCase());
//     // if we don't have a search submission we show all dogs
//     if (match || !searchResult) {
//       items += `<li>${dog.name}</li>`;
//     }
//   }
//   const html = `
//   <!doctype html>
//   <html>
//     <head>
//       <meta charset="utf-8">
//       <title>Dogs!</title>
//     </head>
//     <body>
//       <h1>Dogs!</h1>
//       <form>
//         <label id="search">Search dogs</label>
//         <input id="search" type="search" name="userSearch" placeholder="E.g. rover">
//         <button>Search</button>
//       </form>
//       <ul>${items}</ul>
//     </body>
//   </html>
//   `;
//   res.end(html);
// });

// ------------------------------------------------------

// Challenge 3: add a dog
// Let’s add a form for submitting new dogs to the site.
// We aren’t using a database to store our dogs persistently,
// so we’ll just store new dogs by adding them into the dogs object in-memory.
// This means the dogs will reset each time the server restarts.

// Note: it’s important to always redirect after a POST request.
// This ensures the user only ever ends up on a page rendered via a GET.
// Otherwise if the user navigated back to the results page their browser would resend the POST and you’d get a double-submission.
// This is why lots of sites say “Don’t click back or you’ll be charged twice”!

// 1. Add a new route GET /add-dog
// 2. It should render another form with inputs for each property of a dog
// 3. Add a new route for POST /add-dog
// 4. It should use the Express body-parsing middleware to access the submitted body
// 5. Add the new dog to the dogs object
// 6. Redirect back to the homepage so the user can see their new dog in the list

// When you’re done you should be able to visit
// http://localhost:3333/add-dog, submit the information for a new dog,
// then be redirected to the homepage and see that information in the list.

server.get('/', (req, res) => {
  const search = req.query.search || '';
  let items = '';
  for (const dog of Object.values(dogs)) {
    const match = dog.name.toLowerCase().includes(search.toLowerCase());
    // if we don't have a search submission we show all dogs
    if (match || !search) {
      items += `<li>${dog.name}</li>`;
    }
  }
  const html = `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Dogs!</title>
    </head>
    <body>
      <h1>Dogs!</h1>
      <form>
        <label id="search">Search dogs</label>
        <input id="search" type="search" name="search" placeholder="E.g. rover">
        <button>Search</button>
      </form>
      <ul>${items}</ul>
      <a href="/add-dog">Add dog +</a>
    </body>
  </html>
  `;
  res.end(html);
});

server.get('/add-dog', (req, res) => {
  const html = `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Dogs!</title>
    </head>
    <body>
      <h1>Create a dog</h1>
      <form method="POST">
        <label id="name">Dog name</label>
        <input id="name" name="name">
        <label id="breed">Dog breed</label>
        <input id="breed" name="breed">
        <button>Search</button>
      </form>
    </body>
  </html>
  `;
  res.end(html);
});

const bodyParser = express.urlencoded({ extended: false });

server.post('/add-dog', bodyParser, (request, response) => {
  const newDog = request.body;
  const name = newDog.name.toLowerCase();
  dogs[name] = newDog;
  response.redirect('/');
});

// ------------------------------------------------------

// Challenge 4: removing dogs
// Let’s add delete buttons next to each dog in the list on the homepage.
// You can remove a dog from the dogs object using the delete operator. E.g.

// const name = "pongo";
// delete dogs[name];

// 1. Add a delete form next to each dog’s name on the homepage
// 2. Each one should send a POST to /delete-dog with the name of the dog to remove in the body
// 3. Add a new route POST /delete-dog
// 4. It should get the name of the dog to remove from the request body
// 5. Use the name to remove the dog from the dogs object
// 6. Redirect back to the homepage so the user can see the dog is gone

// When you’re done you should be able to click the delete button next to each dog and see that dog disappear from the list.

// ------------------------------------------------------

const PORT = 3333;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
