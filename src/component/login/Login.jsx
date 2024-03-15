import React, { useState } from 'react'
import Form from './Form';

const Login = () => {

  return (
    <div className="flex w-full h-screen overflow-y-hidden" style={{ backgroundImage: 'url("src/assets/dropppss.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
    
      <div className="w-full  flex items-center justify-center lg:w-1/2 " >
        <Form />
      </div>
      <div className="bg-gray-100 relative h-full hidden w-1/2 2xl:flex lg:flex items-center justify-center" >
      <div className="w-60 h-60 bg-gradient-to-tr from-blue-500 to-yellow-300 animate-bounce rounded-full"></div>

        <div className="w-full absolute h-1/2 bottom-0 bg-white/10 backdrop-blur-lg"></div>
      </div>
    </div>
  )
}

export default Login