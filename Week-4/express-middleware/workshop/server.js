const express = require('express');
const cookieParser = require('cookie-parser');

const checkAuth = require('./middleware/checkAuth');
const handleErrors = require('./middleware/handleErrors');
const logger = require('./middleware/logger');
const getUser = require('./middleware/getUser');
const { deleteSession, createSession } = require('./model');

const PORT = process.env.PORT || 3000;

// this should normally be hidden in a env var
const SECRET = 'nkA$SD89&&282hd';

const server = express();

server.use(cookieParser(SECRET));
server.use(express.urlencoded({ extended: false }));

// this should really be in a database
// let sessions = {};

server.use(logger);
server.use(getUser);

// server.use((req, res, next) => {
//   const sid = req.signedCookies.sid;
//   const sessionInfo = sessions[sid];
//   if (sessionInfo) {
//     req.session = sessionInfo;
//   }
//   next();
// });

server.get('/', (req, res) => {
  const user = req.sessions;
  if (user) {
    res.send(`
      <h1>Hello ${user.email}</h1>
      <form method="post" action="/log-out">
        <button>Log out</button>
      </form>
    `);
  } else {
    // no point keeping cookie if it doesn't match any saved sessions
    // res.clearCookie('sid');
    res.send(`<h1>Hello world</h1><a href="/log-in">Log in</a>`);
  }
});

server.get('/log-in', (req, res) => {
  res.send(`
    <h1>Log in</h1>
    <form action="/log-in" method="POST">
      <label for="email">Email</email>
      <input type="email" id="email" name="email">
    </form>
  `);
});

server.post('/log-in', (req, res) => {
  const newUser = req.body;
  const sid = createSession(newUser);
  res.cookie('sid', sid, {
    signed: true,
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 600000,
  });
  res.redirect('/profile');
});

server.post('/log-out', (req, res) => {
  const sid = req.signedCookies.sid;
  deleteSession(sid);
  res.clearCookie('sid');
  res.redirect('/');
});

// function checkAuth(req, res, next) {
//   if (req.sessions) {
//     next();
//   } else {
//     res
//       .status(401)
//       .send(`<h1>User not found. Please <a href='/log-in'>login</a></h1>`);
//   }
// }

server.get('/profile', checkAuth, (req, res) => {
  const user = req.sessions;
  // if (user) {
  res.send(`<h1>Hello ${user.email}</h1>`);
  // } else {
  //   res
  //     .status(401)
  //     .send(`<h1>User not found. Please <a href='/log-in'>login</a></h1>`);
  // }
});

server.get('/profile/settings', checkAuth, (req, res) => {
  const user = req.sessions;
  res.send(`<h1>Settings for ${user.email}</h1>`);
});

server.get('/error', (req, res, next) => {
  const fakeError = new Error('uh oh');
  fakeError.status = 403;
  next(fakeError);
});

// function handleErrors(error, req, res, next) {
//   console.error(error);
//   const status = error.status || 500;
//   res.status(status).send(`<h1> Not really working</h1>`);
// }

server.use(handleErrors);

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
