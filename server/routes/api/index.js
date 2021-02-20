const path = require("path");
const router = require("express").Router();

const saved = require("./saved");
const search = require("./search");

router.use("/books", saved);
router.use("/search", search);

module.exports = router;