import React from 'react'

function App() {

  const time = () => new Date().toLocaleTimeString();
  React.useEffect(() => {
   setInterval(time, 1000)
  }, [])
  
  setInterval( time, 1000);
  
  return (
    <div className='container'>

      <header>
        <h3 className='head'>

          This is a react coding practising Iplimantation!
        </h3>
      </header>
      <h2>It is {time()}  ...</h2>






    </div>
  )
}


export default App
