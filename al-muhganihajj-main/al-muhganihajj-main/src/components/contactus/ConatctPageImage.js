import React from 'react'
import contactpic from "../../assets/contact.jpg"

const ConatctPageImage = () => {
  return (
    <div 
  style={{ 
    backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,0.3)), url(${contactpic})`, 
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    borderRadius: "0 0 50% 50% / 10px 10px 0 0",
    display: "flex",
    justifyContent: "center", // Center horizontally
    alignItems: "center", // Center vertically
    minHeight: "60vh", // Set the minimum height
  }}
  className="border my-10"
> 
  <h1 className="text-white text-5xl font-semibold font-serif">Contact Us</h1>
</div>

  )
}

export default ConatctPageImage
