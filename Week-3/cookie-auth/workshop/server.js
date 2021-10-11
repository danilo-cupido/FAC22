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

server.get('/login', (request, response) => {
  const userInfo = {
    id: 1,
    username: 'danilo',
    admin: true,
  };
  response.cookie('user', userInfo, {
    httpOnly: true,
    maxAge: 1000 * 60,
    sameSite: 'lax',
    signed: true,
  });
  response.redirect('/');
});

server.get('/logout', (request, response) => {
  response.clearCookie('user');
  response.redirect('/');
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
