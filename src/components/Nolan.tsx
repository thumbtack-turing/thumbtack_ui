import React from 'react'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import nolan from '../assets/nolan.png'

const Jamie = () => {
  return(
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={nolan} alt="Avatar" className="avatar" id="janika"/>
        </div>
        <div className="flip-card-back" id="janika-back">
          <article className="flip-card-details">
            <h1 className="name">Nolan Caine</h1> 
            <h2 className="card-title">Front End Engineer</h2> 
            <p className="person-details">
            I like to design things. Currently, with software engineering tools. Previously, with keyboard instruments, audio engineering tools, and visual design software.
            </p>
            <article className="creator-btns">
              <a href="linkedin.com/in/nolancaine/">
                <img src={linkedin} alt="link to linkedin" className="creator-icon" />
              </a>
              <a href="https://github.com/n0land0">
                <img src={github} alt="link to github" className="creator-icon" />
              </a>
            </article>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Jamie