## สร้าง Controller
- เป็นส่วนประมลผลหลักของแอพลิเคชั่น
- เป็นส่วนที่ทำงานร่วมกับ Route
- เป็นส่วนที่มีการติดต่อกับ Database

## Create server/controller/blogController.js
	```
	exports.create=(req,res)=>{
		res.json({
			data: 'Hello from blogController',
		})
	}
	```


## ลบส่วนการทำงานของ Controller ออกจาก route/blog.js
	```
	const { create } = require("../controller/blogController")
	router.get('/blog', create)
	```