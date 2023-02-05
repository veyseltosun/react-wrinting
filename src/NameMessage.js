import React, { useEffect, useState } from 'react'

const NameMessage = () => {

   const [first, setFirst] = useState(true);

useEffect(() => {
  return() => {
    console.log("unmounting useEffect")
  };
 
}, [])

  return (
    <div>
       {first ? <h3>Hayatta en hakiki mürşit ilimdir.</h3> :
        <h3>Allah'ını seven defansa gelsin.</h3>}
        <button>Mesajı Göster</button>
    </div>
  )
}

export default NameMessage