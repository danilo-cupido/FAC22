const express = require('express');

const server = express();

const cookieParser = require('cookie-parser');

// server.use(cookieParser());

server.use(cookieParser('alongrandomstringnobodyelseknows'));

// server.get('/', (request, response) => {
//   response.send('<h1>Hello</h1>');
// });

// server.get('/', (request, response) => {
//   const cookies = request.get('cookie');
//   console.log(cookies);
//   response.send('<h1>Hello</h1>');
// });

server.get('/', (request, response) => {
  console.log(request.signedCookies);
  response.send('<h1>Hello</h1>');
});

// server.get('/', (request, response) => {
//   const cookies = request.get('cookie');
//   console.log(request.cookies);
//   response.send('<h1>Hello</h1>');
// });

// server.get('/example', (request, response) => {
//   response.set(
//     'set-cookie',
//     'hello=this is my cookie; HttpOnly; Max-Age=60; SameSite=Lax'
//   );
//   response.redirect('/');
// });

// server.get('/example', (request, response) => {
//   response.cookie('hello', 'this is my cookie', {
//     httpOnly: true,
//     maxAge: 1000 * 60, // 60,000ms (60s)
//     sameSite: 'lax',
//   });
//   response.redirect('/');
// });

// server.get('/remove', (request, response) => {
//   response.clearCookie('hello');
//   response.redirect('/');
// });

// server.get('/example', (request, response) => {
//   response.cookie('hello', 'this is my cookie', { signed: true });
//   response.redirect('/');
// });

// -----------------------------------------------------------

// CHALLENGE 1: stateless auth

// server.get('/login', (request, response) => {
//   const userInfo = {
//     id: 1,
//     username: 'danilo',
//     admin: true,
//   };
//   response.cookie('user', userInfo, {
//     httpOnly: true,
//     maxAge: 1000 * 60,
//     sameSite: 'lax',
//     signed: true,
//   });
//   response.redirect('/');
// });

// server.get('/logout', (request, response) => {
//   response.clearCookie('user');
//   response.redirect('/');
// });

// -----------------------------------------------------------

// CHALLENGE 2: session auth

const crypto = require('crypto');

let sessions = {};

server.get('/', (request, response) => {
  const sid = request.signedCookies.sid;
  if (sid) {
    const userInfo = sessions[sid];
    console.log(userInfo);
  }
  response.send('<h1>Hello</h1>');
});

server.get('/login', (request, response) => {
  const sid = crypto.randomBytes(18).toString('base64');
  const userInfo = {
    id: 1,
    username: 'danilo',
    admin: true,
  };
  sessions[sid] = userInfo;
  response.cookie('sid', sid, {
    httpOnly: true,
    maxAge: 60,
    signed: true,
  });
  response.redirect('/');
});

server.get('/logout', (request, response) => {
  const sid = request.signedCookies.sid;
  delete sessions[sid];
  response.clearCookie('sid');
  response.redirect('/');
});

// -----------------------------------------------------------

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
