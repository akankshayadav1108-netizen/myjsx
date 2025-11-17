import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";


function Navbar() {


  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-white/20 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* 🔹 Logo */}
            <div className="text-indigo-600 font-extrabold text-2xl">
              Akanksha
            </div>

        
            <div className="flex space-x-8 justify-center">
              <a
                href="#"
                className="text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-md transition"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-md transition"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-md transition"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-md transition"
              >
                Contact
              </a>
            </div>

       
            <div className="flex gap-5">
              <NavLink to="/login">
             <button
              
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition"
              >
                Login
              </button>
              </NavLink>
            
              
                <NavLink to='Signup'>
                 <button
                
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition"
              >
                Sign Up
              </button>
                </NavLink>
              
              
              
            </div>
          </div>
        </div>
      </nav>

     
      <Outlet/>
          
        
    </>
  );
}

export default Navbar;