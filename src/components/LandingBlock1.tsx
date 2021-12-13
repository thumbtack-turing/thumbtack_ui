import React from 'react'
import book from '../assets/book.mp4'
import decor1 from '../assets/decor1.png'
import decor2 from '../assets/decor2.png'
import decor3 from '../assets/decor3.png'
import "animate.css/animate.min.css"


const LandingBlock1 = () => {
  return (
    <div className="block1">
      <div className="videoContainer">
        <img src={decor1} alt="decor" className="decor animate__animated animate__fadeInUp" id="decor1"/>
        <img src={decor2} alt="decor2" className="decor animate__animated animate__fadeInUp animate__slower" id="decor2"/>
        <img src={decor3} alt="decor3" className="decor animate__animated animate__fadeInUp" id="decor3"/>
        <div className="description-1">
          <h1 className="catchphrase animate__animated animate__fadeInUp animate__slow">The smartest way to organize your research</h1>
          <h2 className="catchphrase2 animate__animated animate__fadeInUp animate__slower">Never use bookmarks again!</h2>
          <button className="block1-btn animate__animated animate__fadeInUp animate__slower">Let's Go!</button>
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