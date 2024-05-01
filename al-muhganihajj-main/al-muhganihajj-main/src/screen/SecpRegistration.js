import React from 'react'
import secp from "../assets/secp.PNG"
const SecpRegistration = () => {
  return (
    <div className="my-10 caret-transparent">
      <div className="md:w-[45%] w-[95%] m-auto h-auto border-8">
        <div className="text-center bg-white xl:text-3xl lg:text-2xl md:text-xl font-serif  md:-mt-6 -mt-4 w-[85%] m-auto md:px-2">
          SECP Registration Certificate
        </div>

        <img src={secp} className="h-[100vh] m-auto py-10" />
      </div>
    </div>
  )
}

export default SecpRegistration
