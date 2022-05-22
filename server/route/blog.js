const express = require("express")
const router = express.Router()
const { create, getAllBlogs, singleBlog, remove } = require("../controller/blogController")

router.post('/create', create)
router.get('/blogs', getAllBlogs)
router.get('/blog/:slug', singleBlog)
router.delete('/blog/:slug', remove)


module.exports = router;