// เก็บ Token, username ลงใน sessionStorage

export const authenticate = (response, next) => {
  if(window !== 'undefined'){
    // เก็บข้อมูลลงใน sessionStorage
    const { username, token } = response.data;
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('username', username);
  }
  next();
  
}