import React from 'react'

function App() {

  const timeHandler = () => new Date().toLocaleTimeString();
  React.useEffect(() => {
   setInterval(timeHandler, 1000)
  }, [])
  
  
  
  return (
    <div className='container'>

      <header>
        <h3 className='head'>

          This is a react coding practising Iplimantation!
        </h3>
      </header>
      <h2>It is {timeHandler}  ...</h2>






    </div>
  )
}


export default App
