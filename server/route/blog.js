const express = require("express")
const router = express.Router()
const { create } = require("../controller/blogController")

router.get('/blog', create)

module.exports = router;