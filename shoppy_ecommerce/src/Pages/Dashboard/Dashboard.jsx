import React,{useState} from "react";
import "./dashboard.css";
import Sidebar from "./Sidebar/Sidebar";
import DashboardProducts from "./Products/DashboardProducts";

const Dashboard = () => {
    
    const [showProducts, setShowProducts] = useState(false);
  const [showOtherComponent, setShowOtherComponent] = useState(false);

  const handleSidebarMenuClick = (component) => {
    if (component === 'products') {
      setShowProducts(true);
      setShowOtherComponent(false);
    } else if (component === 'other') {
      setShowOtherComponent(true);
      setShowProducts(false);
    }
  };
  

  return (
    <>
      <div className="dashboard_main d-flex">
        <div className="left_sidebar col-lg-2">
        <Sidebar onMenuClick={handleSidebarMenuClick} />
        </div>
        <div className="right_sidebar col-lg-10 col-12">
          <div className="sub_right_sidebar m-5 p-3 border-black border-2 ">
            {showProducts && <DashboardProducts />}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
