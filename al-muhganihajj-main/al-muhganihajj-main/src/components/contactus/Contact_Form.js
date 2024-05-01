import React from "react";
import contactpic from "../../assets/hajj1.jpg";

const ContactForm = () => {
  return (
    <div className="md:flex my-10 ">
      <div
        className="px-2 text-white md:pt-10 py-5 md:mx-4 md:my-0 m-4"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${contactpic})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "0 0 50% 50% / 10px 10px 0 0;",
        }}
      >
        <div className="sm:text-3xl text-center md:pt-[3rem] space-y-2 my-5 text-serif">
          <h1 className="">AL-MUGHANI MUNAZZAM PVT LIMITED</h1>
          <h1 className="">
            OFFICE # 4, MAKKAH HEIGHTS, 11-ABBOTT ROAD, LAHORE
          </h1>
          <h1 className="">TEL: 042-36283289</h1>
          <h1>MOB: 0333-4239104</h1>
        </div>
      </div>
      <div className="lg:w-[55%] w-[90%] h-auto  m-auto px-2 border-8">
        <h1 className="-mt-5 ml-10  md:w-[30%] w-[45%] text-center bg-white text-2xl font-semibold text-[#0E5073] font-serif">
          Contact us
        </h1>
        <form>
          <div>
            <label
              for="email"
              class="block mb-2 text-md font-medium text-[#535A5C] dark:text-white"
            >
              NAME
            </label>
            <input
              type="email"
              name="email"
              id="email"
              class=" border border-black-300  rounded-sm text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 focus:border-blue-100"
              placeholder="Name"
              required="option1"
            />
          </div>

          <div className="mt-2">
            <label
              for="email"
              class="block mb-2 text-md font-medium text-[#535A5C] dark:text-white"
            >
              EMAIL
            </label>
            <input
              type="email"
              name="email"
              id="email"
              class=" border border-black-300  rounded-sm text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 focus:border-blue-100"
              placeholder="email@gmail.com"
              required="option1"
            />
          </div>
          <div>
            <label
              for="email"
              class="block mb-2 text-md font-medium text-[#535A5C] dark:text-white"
            >
              Message
            </label>
            <textarea
              type="email"
              name="email"
              id="email"
              class=" border border-black-300 h-[170px] rounded-sm text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 focus:border-blue-100"
              placeholder="email@gmail.com"
              required="option1"
            />
          </div>

          <button
            type="submit"
            class="w-full text-white bg-[#0E5073]  font-medium rounded-md text-sm px-5 py-2.5 text-center my-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
