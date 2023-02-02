import React, { useState } from 'react'
function App() {
  const[timer, setTimer] = useState("");

   function clockShow() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    
    setTimer(hour+ ":"+minute+":"+seconds);
  }
  let mayInterval = setTimeout(clockShow, 1000)
 

  
  
  
  return (
    <div className='container'>

      <header>
        <h3 className='head'>

          This is a react coding practising Iplimantation!
        </h3>
      </header>
      <h2>It is {timer}  </h2>
      






    </div>
  )
}




export default App
