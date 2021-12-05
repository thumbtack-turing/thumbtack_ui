import React from 'react'
import book from '../assets/book.mp4'


const LandingBlock1 = () => {
  return (
    <div className="block1">
      <div className="videoContainer">

        <h1 className="catchphrase">The smartest way to organize your research</h1>
        <h2 className="catchphrase" id="sub">Never use bookmarks again!</h2>
        <div className="overlay"></div>
        <video autoPlay={true} muted loop >
          <source src={book} type="video/mp4" className="video"/>
        </video>
      </div>
    </div>
  )
}

export default LandingBlock1