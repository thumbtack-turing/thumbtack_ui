import React from 'react'
import thumbtack from '../assets/thumbtack.png'

const Logo = () => {
  return (
    <article className="logo">
      <img
        src={ thumbtack }
        alt="purple thumbtack icon" className="thumbtack-icon"
      />
      <h1 className="logo-title">
        <b>thumbtack</b>
      </h1>
    </article>
  )
}

export default Logo
