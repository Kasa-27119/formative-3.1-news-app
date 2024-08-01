import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        header
        <nav id='navbar'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/aboutMe'>About Me</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Header
