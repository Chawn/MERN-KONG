## Slugify


## route/blog.js
- change `router.get('/blog', create)` to `router.post('/create', create)`


## controller/blogController.js
```
  // เชื่อมต่อฐานข้อมูล

  const slugify = require('slugify');

  // บันทึกข้อมูล
  exports.create = (req, res) => {
    const { title, content, author } = req.body;
    const slug = slugify(title);

    res.json({
      data: { title, content, author, slug }
    });
  };


````