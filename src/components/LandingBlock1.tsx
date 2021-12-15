import React from 'react'
import book from '../assets/book.mp4'
import "animate.css/animate.min.css"
import { Link } from 'react-router-dom'

const LandingBlock1 = () => {
  return (
    <div className="block1">
      <div className="videoContainer">
        <div className="description-1">
          <h1 className="catchphrase animate__animated animate__fadeInUp animate__slow">The smartest way to organize your research</h1>
          <h2 className="catchphrase2 animate__animated animate__fadeInUp animate__slower">Never use bookmarks again!</h2>
          <Link to="/myfolders">
            <button className="go-to-app">Go to the app!</button>
          </Link>
        </div>
        <div className="overlay"></div>
        <video autoPlay={true} muted loop>
          <source src={book} type="video/mp4" className="video"/>
        </video>
      </div>
    </div>
  )
}

export default LandingBlock1