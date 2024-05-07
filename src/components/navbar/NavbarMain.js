import React, { useContext } from "react";
import {FaHome } from 'react-icons/fa';
import { FaCartPlus } from "react-icons/fa";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { cartContext } from "../../context/CartContextProvider";
import { Link } from "react-router-dom";

import logo from "../../images/logo3.png"

import "./NavbarMain.css"




const NavbarMain = (props) => {
  
  let [cart,setCart] =
  useContext(cartContext);

  return (
    <Navbar expand="lg" className="p-0 body">
      <div className="container-fluid px-3 body1">
        
        <div className="flex">
          <Link className="nav-link text-dark fs-5 mx-2" to="/">
            <img
              src={logo}
              width="50px"
              height="50px"
              alt="image"
            ></img>{"  "}
            TeeRex Store
          </Link>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto  ">
            
           
              
                <ul className="navbar-nav menu ms-auto me-5 text-decoration-none">
                   
                  <li className="nav-item active">
                    <Link
                      className="nav-link  "
                      style={{ padding: "1.3rem" }}
                      to="/"
                    ><FaHome className="mx-2" /> 
                      Home
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link   "
                      style={{ padding: "1.3rem" }}
                      to="/cart"
                    >
                      <FaCartPlus className="mx-2" />
                      Cart {cart.length>0 &&<span class="position-absolute top-25 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
    <span class="visually-hidden">unread messages</span>
  </span>} 
                    </Link>
                    
                  </li>
                  

              
              
             
            </ul>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavbarMain;