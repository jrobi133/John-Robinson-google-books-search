const router = require("express").Router();
const controllers = require("../../controllers/search");

router.route("/").get(controllers.findAll);
module.exports = router;