import React from 'react'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import jamie from '../assets/jamie.png'

const Jamie = () => {
  return(
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={jamie} alt="Avatar" className="avatar" id="janika"/>
        </div>
        <div className="flip-card-back" id="janika-back">
          <article className="flip-card-details">
            <h1 className="name">Jamie Pace</h1> 
            <h2 className="card-title">Back End Engineer</h2> 
            <p className="person-details">
            Before taking the leap into software engineering, I was a traveling oncology nurse, administering chemotherapy at understaffed hospitals across the US. I'm passionate about helping others, solving complex problems, and jumping headfirst into new challenges.
            </p>
            <p className="person-details">
            Feel free to reach out to me on LinkedIn or find me on GitHub!            
            </p>
            <article className="creator-btns">
              <a href="https://www.linkedin.com/in/jamiejpace/">
                <img src={linkedin} alt="link to linkedin" className="creator-icon" />
              </a>
              <a href="https://github.com/jamiejpace">
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