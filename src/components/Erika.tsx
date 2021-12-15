import React from 'react'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import erika from '../assets/erika.png'

const Erika = () => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={erika} alt="Avatar" className="avatar" id="janika"/>
        </div>
        <div className="flip-card-back" id="janika-back">
          <article className="flip-card-details">
            <h1 className="name">Erika Kischuk</h1> 
            <h2 className="card-title">Back End Engineer</h2> 
            <p className="person-details">
            Erika is a backend developer who loves rock climbing and her cats. When she's not planning out her next coding project, she's cuddling her cats or thinking about where to climb next.            
            </p>
            <article className="creator-btns">
              <a href="https://www.linkedin.com/in/erika-kischuk/">
                <img src={linkedin} alt="link to linkedin" className="creator-icon" />
              </a>
              <a href="https://github.com/eakischuk">
                <img src={github} alt="link to github" className="creator-icon" />
              </a>
            </article>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Erika