import React from 'react'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import janika from '../assets/janika.png'

const Janika = () => {
  return(
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={janika} alt="Avatar" className="avatar" id="janika"/>
        </div>
        <div className="flip-card-back" id="janika-back">
          <article className="flip-card-details">
            <h1 className="name">Janika Hortizuela</h1> 
            <h2 className="card-title">Front End Engineer</h2> 
            <p className="person-details">
              I got my start coding web pages at the ripe age of 14 customizing my Myspace page. Fast forward 15+ years later and I am creating fully functional web apps like Thumbtack!
            </p>
            <p className="person-details">
              I love learning new tech and taking on challenges. When I'm not coding I'm hanging out with my awesome kids and partner or taking naps.Let's get to know each other!
            </p>
            <article className="creator-btns">
              <a href="https://www.linkedin.com/in/janika-hortizuela">
                <img src={linkedin} alt="link to linkedin" className="creator-icon" />
              </a>
              <a href="https://github.com/jhortizu01">
                <img src={github} alt="link to github" className="creator-icon" />
              </a>
            </article>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Janika 