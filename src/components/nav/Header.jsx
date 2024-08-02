import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <nav id='navbar'>
          <h4 className='news-logo'>NewsApp</h4>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/aboutMe'>About Me</Link>
            </li>
            <li>
              <Link to='/'>Videos</Link>
            </li>
            <li>
              <Link to='/'>Contact Us</Link>
            </li>

            <div></div>
          </ul>
        </nav>
    </div>
  )
}

export default Header
