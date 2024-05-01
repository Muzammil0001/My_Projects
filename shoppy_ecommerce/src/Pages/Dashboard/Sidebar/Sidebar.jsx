import React, { useState } from 'react';
import "./sidebar.css";
import DashboardProducts from '../Products/DashboardProducts';


const Sidebar = ({onMenuClick}) => {

  return (
    <>
          <div className='sidebar_Container bg-dark'>
            <div className='brand_img_sec'>
            <img src="assets/images//brand-logo.png" alt="brand_img" /></div>
        <ul>
          <li onClick={()=>onMenuClick("dashboard")}>
            <i className='fas fa-home'></i> Dashboard
                  </li>
                  
                  <li onClick={()=>onMenuClick("products")}>
                  <i class="fa-solid fa-image"></i> Products
                        </li>
                
                  <li className='dropdown'>
                  <span className='dropbtn'>
                    <i className='fa fa-th-large'></i> Components
                  </span>
                  <div className='dropdown-content'>
                    <a href='#'>Link 1</a>
                    <a href='#'>Link 2</a>
                    <a href='#'>Link 3</a>
                  </div>
                  </li>
                  
          <li className='dropdown'>
            <span className='dropbtn'>
              <i className='fa fa-file'></i> Layouts
            </span>
            <div className='dropdown-content'>
              <a href='#'>Link 1</a>
              <a href='#'>Link 2</a>
              <a href='#'>Link 3</a>
              <a href='#'>Link 4</a>
              <a href='#'>Link 5</a>
              <a href='#'>Link 6</a>
            </div>
                  </li>
                  
                  <li className='dropdown'>
                  <span className='dropbtn'>
                    <i className='fa fa-info-circle'></i> About
                  </span>
                  <div className='dropdown-content'>
                    <a href='#'>Link 1</a>
                    <a href='#'>Link 2</a>
                    <a href='#'>Link 3</a>
                  </div>
                  </li>

                  <li className='dropdown'>
                  <span className='dropbtn'>
                    <i className='fas fa-cog'></i> Settings
                  </span>
                  <div className='dropdown-content'>
                    <a href='#'>Link 1</a>
                    <a href='#'>Link 2</a>
                    <a href='#'>Link 3</a>
                  </div>
                  </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
