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

// ดึงข้อมูล token
export const getToken = () => {
  if(window !== 'undefined'){
    if(sessionStorage.getItem('token')){
      return sessionStorage.getItem('token');
    }else{
      return false;
    }
  }
}

// ดึงข้อมูล username
export const getUsername = () => {
  if(window !== 'undefined'){
    if(sessionStorage.getItem('username')){
      return sessionStorage.getItem('username');
    }else{
      return false;
    }
  }
}

// Logout
export const logout = (next) => {
  if(window !== 'undefined'){
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('token')
  }
  next();
}
