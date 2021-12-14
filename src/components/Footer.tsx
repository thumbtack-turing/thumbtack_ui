import React, { useState } from 'react'
import thumbtack from '../assets/thumbtack.png'
import google from '../assets/google.png'
import apple from '../assets/apple.png'

const Footer = () => {
  const [ isOverBtn, setIsOverBtn ] = useState(false)
  const [ isOverLink, setIsOverLink ] = useState(false)

  const handleEnterBtn = (e: any) => {
    e.preventDefault()
    setIsOverBtn(true)
  }

  const handleLeaveBtn = (e: any) => {
    e.preventDefault()
    setIsOverBtn(false)
  }

  const handleEnterLink = (e: any) => {
    e.preventDefault()
    setIsOverLink(true)
  }

  const handleLeaveLink = (e: any) => {
    e.preventDefault()
    setIsOverLink(false)
  }

  const fakeButtons = isOverBtn ? 

  <div className="fake-btn">
    <p>
      This is not a real app. This app was created as a capstone project by Turing Students
    </p>
  </div> :
  null

  const fakeLinks = isOverLink ?
    <div className="fake-links">
      <p>
        This is not a real app. This app was created as a capstone project by Turing Students
      </p>
    </div> :
    null

  return (
    <footer>
      <section className="left-side-footer">
        {fakeLinks}
        <img src={thumbtack} alt="thumbtack logo" className="thumbtack-footer" />
        <div className="links-top">
          <p className="footer-link" onMouseEnter={handleEnterLink} onMouseLeave={handleLeaveLink}>Download</p>
          <p className="footer-link" onMouseEnter={handleEnterLink} onMouseLeave={handleLeaveLink}>License</p>
        </div>
        <div className="links-bottom">
          <p className="footer-link">About</p>
          <p className="footer-link">Features</p>
          <p className="footer-link" onMouseEnter={handleEnterLink} onMouseLeave={handleLeaveLink}>Pricing</p>
          <p className="footer-link" onMouseEnter={handleEnterLink} onMouseLeave={handleLeaveLink}>Careers</p>
          <p className="footer-link" onMouseEnter={handleEnterLink} onMouseLeave={handleLeaveLink}>Privacy Policy</p>
        </div>
        <div>
         <p className="footer-link">© 2021 Thumbtack. All rights reserved</p>
        </div>
      </section>
      <section className="get-app">
        <p>Get the App</p>
        {fakeButtons}
        <img src={apple} alt="apple store" className="fake-icon" onMouseEnter={handleEnterBtn} onMouseLeave={handleLeaveBtn}/>
        <img src={google} alt="google store" className="fake-icon" onMouseEnter={handleEnterBtn} onMouseLeave={handleLeaveBtn}/>
      </section>
    </footer>
  )
}

export default Footer