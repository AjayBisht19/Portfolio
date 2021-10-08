import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar nav mt-4 navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div
            className="collapse d-flex justify-content-evenly navbar-collapse"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <NavLink to="/education" className="navbar-brand me-5 ">
                Education
              </NavLink>

              <NavLink to="/projects" className="navbar-brand me-5 ">
                Projects
              </NavLink>
              <NavLink to="/skills" className="navbar-brand me-5 ">
                Skills
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
