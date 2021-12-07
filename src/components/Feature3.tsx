import React from 'react'
import feature3 from '../assets/feature3.png'
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.min.css"

const Feature3 = () => {
  return (
    <ScrollAnimation animateIn="animate__bounceInUp" delay={650}>
      <div className="feature">
        <img src={feature3} alt="circle icon" className="feature-icon" />
        <h3 className="feature-story">Our Technology</h3>
        <p className="feature-des">
        This app was built with TypeScript, React, SASS, Appollo Client and GraphQL.
        </p>
      </div>
    </ScrollAnimation>
  )
}

export default Feature3