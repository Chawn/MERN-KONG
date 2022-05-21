const express = require("express")
const router = express.Router()

router.get('/blog', (req, res) => {
  res.json({
    data: 'Hello Route Blog',
  })
})

module.export=router