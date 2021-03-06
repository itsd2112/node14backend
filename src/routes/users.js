const express = require("express");
const router = express.Router();

const userController = require("../controller/users");

router.post("/save", userController.createUser);

module.exports = router;