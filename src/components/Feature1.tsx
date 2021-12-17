import React from 'react'
import feature1 from '../assets/feature1.png'
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.min.css"

const Feature1 = () => {
  return (
    <ScrollAnimation animateIn="animate__bounceInUp">
      <div className="feature">
        <img src={feature1} alt="purple flower icon" className="feature-icon" />
        <h3 className="feature-story">Our Story</h3>
        <p className="feature-des">
          As students, we realized that there must be a better way to organize tutorials, videos, and other learning materials - and thus,
            <span className='feature-app-name-callout'> Thumbtack </span>
          was born.
        </p>
      </div>
    </ScrollAnimation>
  )
}

export default Feature1
