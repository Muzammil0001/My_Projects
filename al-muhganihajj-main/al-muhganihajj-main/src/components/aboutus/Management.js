import React, { useState } from 'react'
import pic1 from "../../assets/ceo.jpeg"
import mannan from "../../assets/mannan.jpeg"
import gulam from "../../assets/gulam.jpg"
import masood from "../../assets/masood.jpeg"
import faizan from "../../assets/faizan.jpg"
import aman from "../../assets/aman.jpeg"
import akbar from "../../assets/akbar.jpeg"
import zafar from "../../assets/zafar.jpeg"
import amin from "../../assets/amin.jpeg"



const Management = () => {
  const [list ,setList]=useState([{
    name:"Abdul Mannan Anbalvi",
    desigination:"Director",
    pic:mannan,
    phone:"0300-9485600"
  },
  {
    name:"Gulam Murtaza",
    desigination:"Director / CFO",
    pic:gulam,
    phone:"0300-8067708"
    
  },{
    name:"Shahid Amin",
    desigination:"Director",
    pic:amin,
    phone:"0300-4281421"
  },{
    name:"Zafar Iqbal",
    desigination:"Director",
    pic:zafar,
    phone:"0336-7690803"
  },{
    name:"Hafiz Amanullah",
    desigination:"Director",
    pic:aman,
    phone:"0321-8401171"
  },
  {
    name:"Muhammad Faizan",
    desigination:"Director",
    pic:faizan,
    phone:"0323-4107384"
  },
  {
    name:"Akbar Bhatti",
    desigination:"Director",
    pic :akbar,
    phone:"0300-4236168"
  },
  {
    name:"Masood Sadiq",
    desigination:"Director",
    pic:masood,
    phone:"0333-4216932"
  },

])
  return (
    <div className=''>
    <h1 className="text-center text-3xl font-semibold text-gary-600 italic my-10">Meet Our Management</h1>
     <div className="bg-white shadow-lg rounded-lg overflow-hidden  flex  xl:w-[35%] md:w-[60%] sm:w-[65%] w-[100%] m-auto">
      <div className="flex items-center justify-center p-5">
        <img className="w-40 h-40 rounded-full" src={pic1}   />
      </div>
      <div className="px-6 py-4 pt-[4rem]">
        <div className="font-bold text-xl mb-2">Muhammad Salman</div>
        <p className="text-gray-700 text-base">CEO / Director</p>
        <p className="text-gray-700 text-base">Contact: 0322-2214390</p>
      </div>
    </div>

    <div className='flex flex-wrap justify-center xl:p-10 '>
     {list.map((data)=>{
      return(
        <div className="bg-white shadow-lg rounded-lg overflow-hidden  flex xl:w-[30%] md:w-[45%] sm:w-[60%] w-[100%] m-3">
      <div className="flex items-center justify-center p-5  w-[50%]">
        <img className="w-32 h-32 rounded-full" src={data.pic}   />
      </div>
      <div className="px-2  py-4 pt-10">
        <div className="font-bold text-xl mb-2">{data.name}</div>
        <p className="text-gray-700 text-base">{data.desigination }</p>
        <p className="text-gray-700 text-base">Contact: {data.phone}</p>
      </div>
    </div>
      )
     })}
     </div>

    </div>
  )
}

export default Management
