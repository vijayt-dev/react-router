import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Product() {
  return (
    <div>
        <input type="search" placeholder="Search products" />
        <nav>
            <NavLink to="featured">Featured</NavLink>
            <NavLink to="new">New</NavLink>
        </nav>
        <Outlet />
    </div>
  )
}

export default Product