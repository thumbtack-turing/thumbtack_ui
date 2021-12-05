import React from 'react'
import book from '../assets/book.mp4'


const LandingBlock1 = () => {
  return (
    <div className="block1">
      <div className="videoContainer">
        <div className="description-1">
          <h1 className="catchphrase">The smartest way to organize your research</h1>
          <h2 className="catchphrase2">Never use bookmarks again!</h2>
          <button className="block1-btn">Let's Go!</button>
        </div>
        <div className="overlay"></div>
        <video autoPlay={true} muted loop >
          <source src={book} type="video/mp4" className="video"/>
        </video>
      </div>
    </div>
  )
}

export default LandingBlock1