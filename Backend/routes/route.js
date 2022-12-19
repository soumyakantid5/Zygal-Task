const express = require('express');
const router = express.Router();
const {login} = require("../controllers/login")
const {form} = require("../controllers/form")


router.post("/login", login)
router.post("/form", form)


module.exports = router;
