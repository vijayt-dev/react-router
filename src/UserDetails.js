import React from 'react'
import { useParams } from 'react-router-dom'
function UserDetails() {
    const params = useParams()
    console.log(params)
  return (
    <div>UserDetails {params.userID}</div>
  )
}

export default UserDetails