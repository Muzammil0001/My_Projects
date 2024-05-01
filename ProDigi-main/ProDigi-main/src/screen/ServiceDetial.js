import React ,{useEffect} from "react";
import NavBar from "../component/homeComponent/NavBar";
import Footer from "../component/homeComponent/Footer";
import bggif from "../assets/bg2.jpeg";
import pic from "../assets/bggg.png";
import { serviceData } from "../component/homeComponent/serviseData";
import { useParams } from 'react-router-dom';
import { Link ,useNavigate } from "react-router-dom";

const ServiceDetial = () => {
   const { title } = useParams();
   const navigate = useNavigate()
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const filteredArray = serviceData.filter(item => item.title.includes(title));
  

  return (
    <div>
      <NavBar />
      <div
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,0.3)), url(${bggif})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          borderRadius: "0 0 50% 50% / 10px 10px 0 0",
        }}
        className=" w-[100%] border h-[70vh] flex justify-center items-center"
      >
        <div className=" xl:w-[50%] h-auto text-center space-y-2 ">
          <h1 className="font-poppins md:text-5xl text-3xl font-bold text-white">
            {filteredArray[0].title}
          </h1>
          <div className="flex justify-between">
          <ul className="flex text-center mx-auto md:text-base text-[11px] text-white font-poppins font-semibold">
            <li onClick={()=>navigate("/")} className="cursor-pointer"> Home</li>
            <li className="px-2"> &gt;</li>
            <li> Service</li>
            <li className="px-2"> &gt;</li>
            <li>{filteredArray[0].title}</li>
          </ul>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto h-auto my-10 border-[#546AB2] border-l-8 pl-5" >
        <h1 className="font-poppins text-4xl font-bold my-4 text-[#546AB2]">{filteredArray[0].title}</h1>
      
        <div className="text-lg font-poppins leading-8 "  dangerouslySetInnerHTML={{ __html: filteredArray[0].des }} />

        {filteredArray[0].services?.map((service, index) => (
          <div key={index} className="my-8">
            {Object.entries(service).map(([category, features]) => (
              <div key={category}>
                <h3  className="font-poppins text-[#546AB2] text-2xl font-semibold" >{category}</h3>
                <ul>
                  {features.map((feature, idx) => (
                    <ul className="list-disc">
                    <li className="ml-10" key={idx}>
                      {feature}
                    </li>
                    </ul>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
        <br></br>
        <div className="text-lg font-poppins leading-8 "  dangerouslySetInnerHTML={{ __html: filteredArray[0].lastDes}} />
        
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetial;
