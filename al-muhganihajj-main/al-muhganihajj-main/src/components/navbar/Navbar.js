import React from "react";
import logo from "../../assets/logo.png";
import { useNavigate, NavLink } from "react-router-dom";
import { data } from "../../screen/Data";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [visible , setVisible] = useState(true)

  return (
    <nav className=" border dark:bg-gray-900 dark:border-gray-700 ">
      <div className="md:w-[100%] flex justify-around ">
        <div className="w-[25%]">
          <div className="w-[100%] flex justify-around">
            <img
              className="caret-transparent"
              src={logo}
              width={160}
              height={150}
            />
          </div>
        </div>
        <div className="font-serif md:w-[70%] xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-medium flex justify-around item-center flex-col ">
          𝗔𝗟-𝗠𝗨𝗚𝗛𝗔𝗡𝗜 𝗠𝗨𝗡𝗔𝗭𝗭𝗔𝗠 𝗣𝗩𝗧 𝗟𝗜𝗠𝗜𝗧𝗘𝗗
          <div className="sm:text-xl text-lg text-center font-bold">
            <h1>المغني منظم شركة محدودة</h1>
          </div>
        </div>
      </div>

      <nav className=" border-gray-200">
        <div className="md:flex  max-w-screen-xl p-4 justify-center">
          <a
            href="https://flowbite.com"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          ></a>
          <div className="text-right">
            <button
             onClick={()=>setVisible(!visible)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              
              
            >
              <span className="sr-only ">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
           
            className={`items-center justify-between font-medium ${visible ? "hidden" : ""} w-full md:flex md:w-auto md:order-1`}
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  onClick={() => navigate("/")}
                  className="cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <button
                  id="mega-menu-full-dropdown-button"
                  data-collapse-toggle="mega-menu-full-dropdown"
                  onClick={() => setShow(!show)}
                  className=" cursor-pointer flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Constituent HGOS
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
              </li>

              <li>
                <button
                 
                  onClick={()=>setIsActive(!isActive)}
                  className=" cursor-pointer flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Registration
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {isActive && (
                  <div className="shadow-lg rounded-sm">
                    <li className=" pl-4  pt-2">
                      <a
                        onClick={() => {navigate("/secp");setIsActive(!isActive)}}
                        
                        className="cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        SECP Registration
                      </a>
                    </li>
                    <li className=" pl-4 pr-[4rem] py-2">
                      <a
                      onClick={() => {navigate("/mora");setIsActive(!isActive)}}
                        className="cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        Mora Registration
                      </a>
                    </li>
                  </div>
                )}
              </li>

              <li>
                <a
                  onClick={() => navigate("/aboutus")}
                  className="cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate("/contactus")}
                  className=" cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        {show && (
          <div className="flex flex-wrap  px-4 py-5  text-gray-900 w-[95%] m-auto ">
            {data.map((data, index) => {
              return (
                <div
                  onClick={() => {
                    navigate(`/companyData/${index}`);
                    setShow(!show);
                  }}
                  className="md:w-[33%]"
                >
                  <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                    <div className="font-semibold">{data.HGOs}</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">CEO: </span>
                      {data.CEO}
                    </span>
                  </a>
                </div>
              );
            })}
          </div>
        )}
      </nav>
    </nav>
  );
};

export default Navbar;
