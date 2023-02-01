import React from 'react'

function App() {

  const timeGetHandler = () => new Date().toLocaleTimeString();
  React.useEffect(() => {
   setInterval(timeGetHandler, 1000)
  }, [])
  
  
  
  return (
    <div className='container'>

      <header>
        <h3 className='head'>

          This is a react coding practising Iplimantation!
        </h3>
      </header>
      <h2>It is {timeGetHandler}  ...</h2>






    </div>
  )
}


export default App
