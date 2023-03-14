var express = require("express");
var router = express.Router();
const users = [
  { username: "bob", password: "111" },
  { username: "jim", password: "111" },
];

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/login", function (req, res, next) {
  const foundUser = users.find((user) => user.username === req.body.username);
  // const foundUser2 = users.find(function(user){
  //   return user.username === req.body.username
  // });

  if (foundUser && foundUser.password === req.body.password) {
    // delete foundUser.password
    req.session.user = foundUser;
  }

  res.redirect("/");
});

router.get("/logout", function (req, res) {
  req.session.destroy();
  res.redirect("/");
});

module.exports = router;
