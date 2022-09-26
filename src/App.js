import React from 'react'
import rocketImg from './assets/rocket.jpg'
import Signup from './components/Signup'


function App() {
  return (
   <>
   
   <div className="container mt-3">
    <div className="row">
      <div className="col-md-5">
      <Signup/>
      </div>
      <div className="col-md-7">
        <img  className='img_fluid w-100' src={rocketImg} alt=""/>
      </div>
    </div>
   </div>
   </>
  )
}

export default App

