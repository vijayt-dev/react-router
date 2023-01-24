import React from 'react'
import { useNavigate } from 'react-router-dom'

function Order() {
    const navigate = useNavigate();
  return (
    <div>
        <button onClick={() => navigate("order-summary",{replace: true})}>Order</button>
    </div>
  )
}

export default Order