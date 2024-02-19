// Authentication Container 
import React, { useState } from 'react';
import Signin from "./signin"
import Signup from "./signup"


const LogsData = () => {
  // State to hold user data
  const [data, setData] = useState([]);
  const [select, setSelect]=useState(true)

  return (
    <div>
      {
        /* Pass data state and setData function as props to Signup component */
        /* Pass data state to Signin component */

        select ? <Signin data={data || []} setSelect={setSelect}/>:<Signup data={data || []} setData={setData} setSelect={setSelect} />

      }
      
    </div>
  );
};

export default LogsData;
