# Validate

## controller/blogController.js
```
// เชื่อมต่อฐานข้อมูล

const slugify = require('slugify');

// บันทึกข้อมูล
exports.create = (req, res) => {
	const { title, content, author } = req.body;
	const slug = slugify(title);

	// Validate
	switch(true) {
		case !title:
			return res.status(400).json({
				status: false,
				message: "กรุณากรอกชื่อบทความ",
			});
		case !content:
			return res.status(400).json({
				status: false,
				message: "กรุณากรอกรายละเอียดบทความ",	
			});
		}
		
		res.json({
			status: true,
			message: "บันทึกข้อมูลสำเร็จ",
			data: { title, content, author, slug }
		});
};

```
