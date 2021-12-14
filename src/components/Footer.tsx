import React, { useState } from 'react'
import thumbtack from '../assets/thumbtack.png'
import google from '../assets/google.png'
import apple from '../assets/apple.png'

const Footer = () => {
  const [isOver, setIsOver] = useState(false)

  const handleEnter = () => {
    setIsOver(true)
  }

  const handleLeave = () => {
    setIsOver(false)
  }

  const fakeButtons = isOver ? 
  <div className="fake-hover">
    <p>
      This is not a real app. This app was created as a capstone project by Turing Students
    </p>
  </div> :
  null

  return (
    <footer>
      <section className="left-side-footer">
        <img src={thumbtack} alt="thumbtack logo" className="thumbtack-footer" />
        <div className="links-top">
          <p className="footer-link">Download</p>
          <p className="footer-link">License</p>
        </div>
        <div className="links-bottom">
          <p className="footer-link">About</p>
          <p className="footer-link">Features</p>
          <p className="footer-link">Pricing</p>
          <p className="footer-link">Careers</p>
          <p className="footer-link">Privacy Policy</p>
        </div>
        <div>
         <p className="footer-link">© 2021 Thumbtack. All rights reserved</p>
        </div>
      </section>
      <section className="get-app">
        <p>Get the App</p>
        {fakeButtons}
        <img src={apple} alt="apple store" className="fake-icon" onMouseEnter={handleEnter} onMouseLeave={handleLeave}/>
        <img src={google} alt="google store" className="fake-icon" />
      </section>
    </footer>
  )
}

export default Footer