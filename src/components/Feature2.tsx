import React from 'react'
import feature2 from '../assets/feature2.png'
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.min.css"

const Feature2 = () => {
  return (
    <ScrollAnimation animateIn="animate__bounceInUp" delay={350}>
      <div className="feature">
        <img src={feature2} alt="circle icon" className="feature-icon" />
        <h3 className="feature-story">Our Vision</h3>
        <p className="feature-des">
        Imagine there was a way to organize your saved websites how YOU want, with customized folders.      </p>
      </div>
    </ScrollAnimation>
  )
}

export default Feature2