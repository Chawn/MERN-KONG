const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// import routes
const blogRoute = require('./routes/blog')
const authRoute = require('./routes/auth')


// Connect to MongoDB
mongoose
	.connect(process.env.DATABASE, {
		useNewUrlParser: true,
		useUnifiedTopology: false,
	})
	.then(() => console.log('เชื่อมต่อ MongoDB สำเร็จแล้ว...'))
	.catch(err => console.log(`เชื่อมต่อ MongoDB ไม่สำเร็จ: ${err}`));


const app = express();
// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Routes
app.use('/api', blogRoute)
app.use('/api', authRoute)

// Server port
const PORT = process.env.PORT || 5500;

// Start server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
