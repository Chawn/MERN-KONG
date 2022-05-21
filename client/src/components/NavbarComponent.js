import React from 'react'

const NavbarComponent = () => {
  return (
    <nav>
      <ul className='nav nav-tabs'>
        <li className='nav-item pe-3 pt-2 pb-3'>
          <a href="/" className='nav-link'>หน้าแรก</a>
        </li>
        <li className='nav-item pe-3 pt-2 pb-3'>
          <a href="/create" className='nav-link'>เขียนบทความ</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavbarComponent