import React from 'react'
import thumbtack from '../assets/thumbtack.png'

const Logo = () => {
  return (
    <div className="logo">
      <h1 className="logo-title"><b>ThumbTack</b></h1>
      <img src={thumbtack} alt="purple thumbtack icon" className="thumbtack-icon" />
    </div>
  )
}

export default Logo