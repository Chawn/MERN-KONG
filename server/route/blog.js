const express = require("express")
const router = express.Router()
const { create, getAllBlogs } = require("../controller/blogController")

router.post('/create', create)
router.get('/blogs', getAllBlogs)

module.exports = router;