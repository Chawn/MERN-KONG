const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Connect to MongoDB
mongoose
	.connect(process.env.DATABASE, {
		useNewUrlParser: true,
		useUnifiedTopology: false,
	})
	.then(() => console.log('เชื่อมต่อ MongoDB สำเร็จแล้ว...'))
	.catch(err => console.log(`เชื่อมต่อ MongoDB ไม่สำเร็จ: ${err}`));

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));



const PORT = process.env.PORT || 5500;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// app.use(express.json({ extended: false }));
// app.use(express.urlencoded({ extended: true }));

// // Define Routes
// app.use('/api/assets', require('./routes/api/assets'));
// app.use('/api/users', require('./routes/api/users'));
// app.use('/api/searchs', require('./routes/api/searchs'));
// app.get('/api', (req, res) => {
//   res.send('Welcome to server');
// })

// app.get('/api/image', async (req, res) => {
// 	try {
// 		request.get(req.query.url, { encoding: null }, function(err,resp) {
// 		if(err) {
// 			next(err)
// 		} else {
// 			if(resp.statusCode !== 200 ) {
// 				console.log(resp)
// 			} else {
// 				res.contentType(resp.headers['content-type']);
// 				res.end(resp.body, 'binary');
// 			}
// 		}
// 	});
// 	} catch (error) {
// 		console.log(error);
// 	}
// });

// // Serve static assets in production
// if (process.env.NODE_ENV === 'production') {
// 	// Set static folder
// 	app.use(express.static('client/build'));

// 	app.get('*', (req, res) => {
// 		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// 	});
// }
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// process.on('uncaughtException', function (err) {
// 	console.log(err);
// });
