import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    const navLinkStyle = ({isActive}) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "#eee" : "#123"
        }
    }
  return (
    <div>
        <nav>
            <NavLink style={navLinkStyle} to="/">Home </NavLink>
            <NavLink style={navLinkStyle} to="/about">About </NavLink>
            <NavLink style={navLinkStyle} to="/product">Product</NavLink>

        </nav>
    </div>
  )
}

export default NavBar