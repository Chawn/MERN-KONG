const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
  const { username, password } = req.body;
  if(password===process.env.PASSWORD){
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.status(200).json({
      status: true,
      message: 'เข้าสู่ระบบสำเร็จ',
      token
    });
  }else{
    return res.status(400).json({
      status: false,
      message: 'รหัสผ่านไม่ถุกต้อง'
    });
  }
};