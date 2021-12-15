import React from 'react'

const CreatorDetails = () => {
  return (
    <section className="creator-details">
    <h1 className="creator-title">The creative crew behind Thumbtack</h1>
    <h2 className="creator-h1">WHO WE ARE</h2>
    <p className="story">We are mod 4 Turing students who made this project for our capstone. As students there was a problem that we were facing when doing our own self study: how do we keep all of our resources organized in one place? We were all becoming tab monsters. Thus, the idea for Thumbtack was born.</p>
    <h2 className="creator-h1">TECH STACK</h2>
    <div className="stack">
      <div className="story" id="list">
        <ul>Front End: </ul>
        <li>React</li>
        <li>TypeScript</li>
        <li>SCSS</li>
        <li>Apollo Client</li>
      </div>
      <div className="story" id="list">
        <ul>Back End:</ul>
        <li>GraphQL</li>
        <li>PostgresSQL</li>
        <li>Ruby on Rails</li>
      </div>
    </div>
  </section>
  )
}

export default CreatorDetails