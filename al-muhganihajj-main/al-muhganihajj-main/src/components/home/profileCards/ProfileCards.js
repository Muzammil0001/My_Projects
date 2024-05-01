import React,{useEffect} from "react";

import { profileCardsData } from "./profileCardsData";

const ProfileCards = () => {

  return (
    <div className="my-10">
      <h1 className="text-center text-4xl font-semibold text-[#0E5073]">
        Places Visit During Hajj Pilgrimage
      </h1>
      <div className="w-[100%] h-auto flex flex-wrap justify-evenly">
        {profileCardsData.map((data) => {
          return (
            <div className="md:w-[40%] h-auto text-center px-10 rounded-3xl shadow-lg my-5 py-10 ">
              <div className=" border h-auto m-auto my-10">
                <img src={data.image} />
              </div>
              <h1 className="text-xl italic font-bold text-[#0E5073]">
                {data.title}
              </h1>
              <h3 className="text-left text-sm text-[#535A5C] italic">
                {data.desc}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileCards;
