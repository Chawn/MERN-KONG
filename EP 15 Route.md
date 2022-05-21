## Create server/route/blog.js
	```
	const express = require("express")
	const router = express.Router()

	router.get('/blog', (req, res) => {     // จะแยกไปเขียนใน Controller ใน EP16
		res.json({
			data: 'Hello Route Blog',
		})
	})

	module.exports = router;
	```