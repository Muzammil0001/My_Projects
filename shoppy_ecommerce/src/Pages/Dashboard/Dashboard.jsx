import React,{useState} from "react";
import "./dashboard.css";
import Sidebar from "./Sidebar/Sidebar";
import DashboardProducts from "./Products/DashboardProducts";
import Dashboard_page from "./Dashboard_page/Dashboard_page";

const Dashboard = () => {
    
    const [showProducts, setShowProducts] = useState(false);
  const [dashboard, setDashboard] = useState(true);

  const handleSidebarMenuClick = (component) => {
    switch(component)
    {
      case "dashboard":{
        setDashboard(true);
        setShowProducts(false);
        break;
        }
      case "products":{
        setShowProducts(true);
        setDashboard(false);
        break;
      }
      default:{
        setDashboard(true);
        setShowProducts(false);
      }
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
             {dashboard && <Dashboard_page/>}
            {showProducts && <DashboardProducts />}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
