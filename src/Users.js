import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

function Users() {
    const [urlparams,setUrlparams] = useSearchParams();
    const isActive = urlparams.get("filter")
    console.log(isActive)
  return (
    <div>
        <h2>User 1</h2>
        <h2>User 2</h2>
        <h2>User 3</h2>
        <Outlet />

        <div>
            <button onClick={() => setUrlparams({filter:"active"})}>Active Users</button>
            <button onClick={() => setUrlparams({})}>Reset Filter</button>   
        </div>
        {isActive === "active" ? "Showing active users" : "Showing all users"}
    </div>
  )
}

export default Users