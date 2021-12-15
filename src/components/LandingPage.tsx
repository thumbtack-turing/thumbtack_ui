import React from 'react';
import Block1 from './LandingBlock1'
import Block2 from './LandingBlock2'
import Block3 from './LandingBlock3'

import Footer from './Footer'

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Block1 />
      <Block2 />
      <Block3 />
      <Footer />
    </div>
  )
}

export default LandingPage
