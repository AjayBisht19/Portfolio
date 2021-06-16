import React from "react";

export default function Navbar() {
  return (
    <>
      <nav class="navbar nav mt-4 navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <div
            class="collapse d-flex justify-content-evenly navbar-collapse"
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav">
              <a class="navbar-brand" href="#">
                Education
              </a>
              <a class="navbar-brand" href="#">
                Projects
              </a>
              <a class="navbar-brand" href="#">
                About
              </a>
              <a class="navbar-brand" href="#">
                Training
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
