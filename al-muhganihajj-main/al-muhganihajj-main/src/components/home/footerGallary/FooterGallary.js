import React from 'react'
import footerpic from "../../../assets/pic1.png"
import playstorepic from "../../../assets/pic2.png"

import footerpic2 from "../../../assets/logo.png"
import strippic from "../../../assets/pic3.png"



const FooterGallary = () => {
  return (
    <div className='w-[100%] h-auto bg-[#F5F5F5] md:flex text-center my-10'>

    <div className='md:w-[50%] py-10'>
    <h1 className='text-2xl italic font-semibold w-[80%] m-auto'>Ministry of Religious Affairs and Interfaith Harmony</h1>
    <div className='md:w-[30%] sm:w-[35%] w-[40%] m-auto my-5'><img src={footerpic} /></div>
    <h1 className='text-2xl italic font-semibold w-[80%] m-auto'>Ministry of Hajj and Ummarh</h1>
    <div className=' md:w-[30%] sm:w-[35%] w-[40%] m-auto my-5'><img src={playstorepic} /></div>
    
    </div>

    <div className='md:w-[50%] py-10'>
     <h1 className='text-2xl font-semibold md:w-[50%] w-[80%] m-auto italic'>  Al-Mughani Munazzam pvt Limited</h1>
    <div className='md:w-[25%] sm:w-[30%] w-[35%] m-auto my-5'><img src={footerpic2} /></div>
   
     <div className=' md:w-[25%] sm:w-[30%] w-[35%] m-auto my-5'><img src={strippic} /></div>
     
 
    
    </div>
          
    </div>
  )
}

export default FooterGallary
