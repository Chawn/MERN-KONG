const express = require("express")
const router = express.Router()
const { create, getAllBlogs, singleBlog } = require("../controller/blogController")

router.post('/create', create)
router.get('/blogs', getAllBlogs)
router.get('/blog/:slug', singleBlog)

module.exports = router;