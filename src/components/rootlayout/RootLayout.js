import React from "react";
import NavbarMain from "../navbar/NavbarMain";
import "./RootLayout.css";
import { Outlet } from "react-router-dom";


function RootLayout() {
   
        

  return (
    <div
      className="home"
    >
      <div className="head">
      <NavbarMain/>
      </div>
      

      {/* placeholder */}
      <div className="main">
        <Outlet />
      </div>
      
       
      
    </div>
  );
}

export default RootLayout;