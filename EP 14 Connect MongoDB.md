
## server.js
```
// Connect to MongoDB
mongoose
	.connect(process.env.DATABASE, {
		useNewUrlParser: true,
		useUnifiedTopology: false,
	})
	.then(() => console.log('เชื่อมต่อ MongoDB สำเร็จแล้ว...'))
	.catch(err => console.log(`เชื่อมต่อ MongoDB ไม่สำเร็จ: ${err}`));
```