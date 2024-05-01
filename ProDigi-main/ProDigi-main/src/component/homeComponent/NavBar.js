import React, {useState} from 'react'
import logo from "../../assets/logo.png"
import { NavLink } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate()
   const [visible , setVisible] = useState(true)
  return (
    <nav className="bg-white dark:bg-gray-900  w-full z-20 top-0 start-0 border-gray-200 dark:border-gray-600">
  <div className="w-[84%] flex flex-wrap items-center justify-between mx-auto p-4">
  <NavLink  className="flex items-center space-x-3 rtl:space-x-reverse caret-transparent">
      <img src={logo} height={76} width={63} alt="Flowbite Logo" />
  </NavLink>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <ScrollLink to="getQoute" smooth={true} duration={500} className=" cursor-pointer md:py-4 md:px-5 text-[#4159A7] font-Poppins border border-gray-800  rounded-[50px] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{ borderRadius: '60px' , padding: '16px 26px' }} >Request Quote</ScrollLink>

      <button  onClick={()=>setVisible(!visible)} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className={` items-center justify-between ${visible ? "hidden" : ""} w-full md:flex md:w-auto md:order-1" id="navbar-sticky `}>
    <ul className="flex flex-col p-4  md:p-0 mt-4  font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-[1rem] lg:space-x-[4rem] rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
  <ScrollLink onClick={() => { setVisible(!visible); navigate("/") }} to="/" smooth={true} duration={500} className="cursor-pointer block py-2 px-3 text-[#363434] font-[17px] font-Poppins rounded md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">Home</ScrollLink>
</li>

      <li>
        <ScrollLink   onClick={() => { setVisible(!visible); navigate("/") }} to="about" smooth={true} duration={500}  className="block cursor-pointer   py-2 px-3 text-[#363434] font-[17px] font-Poppins rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</ScrollLink>
      </li>
      <li>
        <ScrollLink   onClick={() => { setVisible(!visible); navigate("/") }} to="services" smooth={true} duration={500}   className="block cursor-pointer  py-2 px-3 text-[#363434] font-[17px] font-Poppins rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</ScrollLink>
      </li>
      <li>
        <ScrollLink    onClick={() => { setVisible(!visible); navigate("/") }} to="testimonial" smooth={true} duration={500} className="block cursor-pointer  py-2 px-3  text-[#363434] font-[17px] font-Poppins rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Testimonial</ScrollLink>
      </li>
       <li>
        <ScrollLink   onClick={() => { setVisible(!visible); navigate("/") }} to="getQoute" smooth={true} duration={500} className="block cursor-pointer  py-2 px-3 text-[#363434] font-[17px] font-Poppins rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Get Qoute</ScrollLink>
      </li>
    </ul>
  </div>
  </div>
</nav>
  )
}

export default NavBar
