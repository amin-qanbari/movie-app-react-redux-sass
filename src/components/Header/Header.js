import React from 'react'

//css
import "./Header.scss"

//import Link
import { Link } from 'react-router-dom'

//image
import user from "../../images/user.png"

const Header = () => {
  return (
    <div className='header'>
      <Link to="/">
        <div className="logo">
          Movie App
        </div>
      </Link>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  )
}

export default Header