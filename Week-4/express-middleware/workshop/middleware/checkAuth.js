function checkAuth(req, res, next) {
  if (req.sessions) {
    next();
  } else {
    res
      .status(401)
      .send(`<h1>User not found. Please <a href='/log-in'>login</a></h1>`);
  }
}

module.exports = checkAuth;
