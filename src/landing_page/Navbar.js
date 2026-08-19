import React from "react";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-white sticky-top"
      style={{
        padding: "18px 0",
        borderBottom: "1px solid #eee",
      }}
    >
      <div className="container-fluid px-4">

        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img
            src="media/images/logo.svg"
            alt="Zerodha"
            style={{
              width: "150px",
            }}
          />
        </a>

        {/* Mobile button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav ms-auto mb-2 mb-lg-0"
            style={{
              gap: "20px",
            }}
          >
            <li className="nav-item">
              <a className="nav-link" href="#">
                Signup
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Products
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Support
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                <i class="fa-solid fa-bars"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;