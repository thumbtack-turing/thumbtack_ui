import React from 'react'
import recording1 from '../assets/recording1.gif'
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.min.css"

const How1 = () => {
  return (
    <div className="how">
      <ScrollAnimation animateIn="animate__bounceInLeft">
      <img src={recording1} alt="demo" className="recording" />
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__bounceInRight">
        <div className="how-details">
          <h4 className="how-title">Smart</h4>
          <p className="how-des">The user creates a folder with a custom name. Once a folder is created users can input links to their websites so they can refer to the later.</p>
        </div>
      </ScrollAnimation>
    </div>
  )
}

export default How1