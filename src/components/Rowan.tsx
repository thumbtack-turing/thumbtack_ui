import React from 'react'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import rowan from '../assets/rowan.png'

const Rowan = () => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={rowan} alt="Avatar" className="avatar" id="janika"/>
        </div>
        <div className="flip-card-back" id="janika-back">
          <article className="flip-card-details">
            <h1 className="name">Rowan Delong</h1> 
            <h2 className="card-title">Back End Engineer</h2> 
            <p className="person-details">
            I am an expert sandwich maker, a nonbinary human, and a software developer excited about code that makes a difference.  I thrive in environments that have me consistently challenged and constantly growing, and have found that coding is the perfect combination of the two. Talk to me about rollerblading, fantasy novels, and Fast and Furious 😎
            </p>
            <article className="creator-btns">
              <a href=" https://github.com/RowanDW ">
                <img src={linkedin} alt="link to linkedin" className="creator-icon" />
              </a>
              <a href="hhttps://www.linkedin.com/in/rowandelong/">
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