import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="">
        <ul className="flex flex-row ">
          <li className="md:px-4 px-2">
            <NavLink to="/" className="text-black font-medium">
              Home
            </NavLink>
          </li>
          <li className="md:px-4 px-2">
            <NavLink to="/about" className="text-black font-medium">
              About Us
            </NavLink>
          </li>
          <li className="md:px-4 px-2">
            <NavLink to="/services" className="text-black font-medium">
              Services
            </NavLink>
          </li>
          {/* <li className="px-4">
            <NavLink to="/contact" className="text-black font-medium">
              Contact
            </NavLink>
          </li>
          <li className="px-4">
            <NavLink to="/jsonserver" className="text-black font-medium">
              JsonAPI
            </NavLink>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
