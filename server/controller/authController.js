const jwt = require('jsonwebtoken');
const { expressjwt } = require('express-jwt');

exports.login = (req, res) => {
  const { username, password } = req.body;
  if(password===process.env.PASSWORD){
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.status(200).json({
      status: true,
      message: 'เข้าสู่ระบบสำเร็จ',
      token,
      username
    });
  }else{
    return res.status(400).json({
      status: false,
      message: 'รหัสผ่านไม่ถุกต้อง'
    });
  }
};

// ตรวจสอบ token ที่ส่งมาว่าถูกต้องหรือไม่ เพื่อให้สิทธิ์เข้าถึง API 
exports.requireLogin = expressjwt({
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256'],
  userProperty: 'auth'
})