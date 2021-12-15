import React from 'react';
import Janika from './Janika'
import CreatorDetails from './CreatorDetails';
import Rowan from './Rowan'
import ConeCat from './ConeCat'
import Erika from './Erika'
import Jamie from './Jamie'
import Nolan from './Nolan'

const Creators = () => {
  return (
    <div className="creators">
      <CreatorDetails />
      <section className="cards">
        <Janika />
        <ConeCat />
        <Rowan />
        <Erika />
        <Jamie />
        <Nolan />
      </section>

    </div>
  )
}

export default Creators