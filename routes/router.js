const express = require("express");
const router = express.Router();
const { getHome } = require("../controllers/controller");

router.route("/").get(getHome);

module.exports = router;
