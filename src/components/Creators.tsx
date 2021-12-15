import React from 'react';
import janika from '../assets/janika.png'

const Creators = () => {
  return (
    <div className="creators">

      <section>
        <h1>The creative crew behind Thumbtack</h1>
        <h2>WHO WE ARE</h2>
        <p>We are mod 4 Turing students who made this project for our capstone. As students there was a problem that we were facing when doing our own self study: how do we keep all of our resources organized in one place? We were all becoming tab monsters. Thus, the idea for Thumbtack was born.</p>
        <h2>TECH STACK</h2>
        <div className="front-end-stack">
          <ul>Front End: </ul>
          <li>React</li>
          <li>TypeScript</li>
          <li>SCSS</li>
          <li>Apollo Client</li>
        </div>
        <div className="back-end-stack">
          <ul>Back End:</ul>
          <li>GraphQL</li>
        </div>
      </section>

      <section className="cards">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={janika} alt="Avatar" className="avatar" id="janika"/>
            </div>
            <div className="flip-card-back">
              <h1>John Doe</h1> 
              <p>Architect  Engineer</p> 
              <p>We love that guy</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Creators