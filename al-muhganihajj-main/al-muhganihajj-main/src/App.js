import React from "react";

import Navbar from "./components/navbar/Navbar";
import HomeScreen from "./screen/HomeScreen";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import ContactScreen from "./screen/ContactScreen";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import AboutUs from "./screen/AboutUs";
import CompanyData from "./screen/CompanyData";
import MoraRegistration from "./screen/MoraRegistration";
import SecpRegistration from "./screen/SecpRegistration";
import PagenotFound from "./screen/PagenotFound";

function App() {
  return (
    <div>
      <Toaster />
      <Navbar />
      <hr />

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/contactus" element={<ContactScreen />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/companyData/:id" element={<CompanyData />} />
        <Route path="/secp" element={<SecpRegistration />} />
        <Route path="/mora" element={<MoraRegistration />} />
        <Route path="/*" element={<PagenotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
