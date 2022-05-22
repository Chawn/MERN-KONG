import { Link } from 'react-router-dom'
import { withRouter } from "react-router";
import { getUsername, logout } from '../services/authorize'

const NavbarComponent = ({history}) => {
  return (
    <nav className="mb-4">
      <ul className='nav nav-tabs'>
        <li className='nav-item pe-3 pt-2 pb-3'>
          <Link to="/" className='nav-link'>หน้าแรก</Link>
        </li>
        { 
          getUsername() &&
          <li className='nav-item pe-3 pt-2 pb-3'>
            <Link to="/create" className='nav-link'>เขียนบทความ</Link>
          </li>
        }
        { 
          !getUsername() &&
          <li className='nav-item pe-3 pt-2 pb-3'>
            <Link to="/login" className='nav-link'>เข้าสู่ระบบ</Link>
          </li>
        }
        { 
          getUsername() &&
          <li className='nav-item pe-3 pt-2 pb-3'>
            <button onClick={()=>logout(()=> history.push("/"))} className='nav-link'>{getUsername() } ออกจากระบบ</button>
          </li>
        }
      </ul>
    </nav>
  )
}

export default withRouter(NavbarComponent)