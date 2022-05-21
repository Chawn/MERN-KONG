// เชื่อมต่อฐานข้อมูล / ดำเนินการกับฐานข้อมูล

const slugify = require('slugify');
const Blogs = require('../models/blogs');

// บันทึกข้อมูล
exports.create = (req, res) => {
	const { title, content, author } = req.body;
	const slug = slugify(title);

	// Validate
	switch (true) {
		case !title:
			return res.status(400).json({
				status: false,
				message: 'กรุณากรอกชื่อบทความ',
			});
		case !content:
			return res.status(400).json({
				status: false,
				message: 'กรุณากรอกรายละเอียดบทความ',
			});
	}
	
	Blogs.create({ title, content, author, slug }, (err, blog) => {
		if (err) {
			return res.status(400).json({
				status: false,
				message: 'มีบทความชื่อซ้ำกัน',
				error: err,
			});
		}
		return res.status(200).json({
			status: true,
			message: 'บันทึกข้อมูลเรียบร้อย',
			data: blog,
		});
	});

	// res.json({
	// 	status: true,
	// 	message: "บันทึกข้อมูลสำเร็จ",
	// 	data: { title, content, author, slug }
	// });
};
