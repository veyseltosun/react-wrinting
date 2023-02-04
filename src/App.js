import React, { useEffect, useState } from 'react'
import NameMessage from './NameMessage';
function App() {
  const[name, setName] = useState("Veysel");

   
  useEffect(() => {
    console.log("useEffect run.")
  },[name])
  
  
  return (
    <div className='container'>

      <h1> Merhaba {name}</h1>
      <button onClick={() => setName("Ahmet")}>Ismi Degistir.</button>
      <NameMessage/>
    </div>
  )
}




export default App
