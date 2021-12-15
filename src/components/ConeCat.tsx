import React from 'react'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import conecat from '../assets/conecat.png'

const Rowan = () => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={conecat} alt="Avatar" className="avatar" id="janika"/>
        </div>
        <div className="flip-card-back" id="janika-back">
          <article className="flip-card-details">
            <h1 className="name">Cone Cat</h1> 
            <h2 className="card-title">Cat Engineer</h2> 
            <p className="person-details">
            Lap cat with scrambled eggs for brains. Hobbies include: looking cute, grooming his humans, and eating mac n cheese (unauthorized)
            </p>
            <article className="creator-btns">
              <a href="https://http.cat/">
                <img src={linkedin} alt="link to linkedin" className="creator-icon" />
              </a>
              <a href="https://icanhas.cheezburger.com/">
                <img src={github} alt="link to github" className="creator-icon" />
              </a>
            </article>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Rowan