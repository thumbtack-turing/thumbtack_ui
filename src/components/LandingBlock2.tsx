import React from 'react'
import Feature1 from './Feature1'
import Feature2 from './Feature2'
import Feature3 from './Feature3'

const LandingBlock2 = () => {
  return (
    <div className="block2">
      <h2 className="features-title">Features</h2>
      <section className="features-container">
        <Feature1 />
        <Feature2 />
        <Feature3 />
      </section>
    </div>
  )
}

export default LandingBlock2