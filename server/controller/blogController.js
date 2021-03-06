// เชื่อมต่อฐานข้อมูล / ดำเนินการกับฐานข้อมูล

const slugify = require('slugify');
const Blogs = require('../models/blogs');
const { v4: uuidv4 } = require('uuid');

// บันทึกข้อมูล
exports.create = (req, res) => {
	const { title, content, author } = req.body;
	let slug = slugify(title);

	if (!slug) {
		slug = uuidv4();
	}
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
				message: 'ขออภัย..มีบทความชื่อซ้ำกัน',
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

// ดึงข้อมูลบทความทั้งหมด
exports.getAllBlogs = (req, res) => {
	Blogs.find({})
		.sort({ createdAt: 'desc' })
		.exec((err, blogs) => {
			if (err) {
				return res.status(400).json({
					status: false,
					message: 'ขออภัย..ไม่พบบทความ',
					error: err,
				});
			}
			return res.status(200).json({
				status: true,
				message: 'ดึงข้อมูลบทความเรียบร้อย',
				data: blogs,
			});
		});
};

// ดึงข้อมูลบทความเดียว โดย slug
exports.singleBlog = (req, res) => {
	const { slug } = req.params;
	Blogs.findOne({ slug }).exec((err, blog) => {
		if (err) {
			return res.status(400).json({
				status: false,
				message: 'ขออภัย..ไม่พบบทความ',
				error: err,
			});
		}
		return res.status(200).json({
			status: true,
			message: 'ดึงข้อมูลบทความเรียบร้อย',
			data: blog,
		});
	});
};

// ลบข้อมูล โดย slug
exports.remove = (req, res) => {
	const { slug } = req.params;
	Blogs.findOneAndDelete({ slug }, function (err, blog) {
		if (err) {
			return res.status(400).json({
				status: false,
				message: 'ลบไม่สำเร็จ',
				error: err,
			});
		} else {
			return res.status(200).json({
				status: true,
				message: 'ลบบทความเรียบร้อย',
			});
		}
	});

};


//แก้ไขข้อมูล โดย slug
exports.update = (req, res) => {
	const { slug } = req.params;
	const { title, content, author } = req.body;

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

	
	Blogs.findOneAndUpdate({ slug }, { title, content, author }, {new:true}).exec((err, blog)=>{
		if(err){
			return res.status(400).json({
				status: false,
				message: 'แก้ไขไม่สำเร็จ',
				error: err,
			});
		}
		return res.status(200).json({
			status: true,	
			message: 'แก้ไขบทความเรียบร้อย',
			data: blog,
		});
	});
};
