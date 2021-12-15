import React from 'react'
import recording2 from '../assets/recording2.gif'
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.min.css"

const How2 = () => {
  return (
    <div className="how">
      <ScrollAnimation animateIn="animate__bounceInLeft">
        <div className="how-details">
          <h4 className="how-title">Organized</h4>
          <p className="how-des">Keep all of your resources organized and in one place. No need to use book marks on your browser ever again!</p>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__bounceInRight">
        <img src={recording2} alt="recording of app" className="recording" />
      </ScrollAnimation>
    </div>
  )
}

export default How2