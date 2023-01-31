const User = require("../models/users");

const getHome = (req, res) => {
  const skip = 0;
  const limit = 5;
  const { page } = req.query;

  const pagination = (page - 1) * limit;

  User.find({})
    .limit(limit)
    .skip(pagination)
    .then((result) => {
      res.render("home", { result });
    });
};

module.exports = { getHome };
