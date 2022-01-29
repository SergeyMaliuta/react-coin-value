import React from "react"
import { FaCoins } from "react-icons/fa"
import "./Navbar.css"

const index = () => {
  return (
    <div className="navbar">
      <FaCoins className="icon" />
      <h1>
        Coin <span className="purple">Value</span>
      </h1>
    </div>
  )
}

export default index
