import React from 'react'
function App() {


   function clockShow() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    console.log(hour+ ":"+minute+":"+seconds);
    const time = (hour+ ":"+minute+":"+seconds);
  }

  
  
  
  return (
    <div className='container'>

      <header>
        <h3 className='head'>

          This is a react coding practising Iplimantation!
        </h3>
      </header>
      <h2>It is {time}  ...</h2>
      






    </div>
  )
}

setInterval(clockShow, 1000)


export default App
