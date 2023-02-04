import React, { useState } from 'react'

const NameMessage = () => {

   const [first, setFirst] = useState(true);



  return (
    <div>
       {first ? <h3>Hayatta en hakiki mürşit ilimdir.</h3> :
        <h3>Allah'ını seven defansa gelsin.</h3>}
        <button onClick={() => setFirst(!first)}>Change the Message</button>
    </div>
  )
}

export default NameMessage