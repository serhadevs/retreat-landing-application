const express = require("express");
const router = express.Router();
const { register, markPresent } = require("../controllers/patronsController");
// const confirmPatron = require("../controllers/confirmation")
const verifyPatron = require("../middleware/verifyPatron");

//Register for event
router.post("/register", verifyPatron, register);

//Mark Present
// router.post("/mark", verifyPatron, markPresent);

module.exports = router;
