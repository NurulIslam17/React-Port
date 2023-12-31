import React from "react";
import { Link } from 'react-router-dom'
import '../../src/global.css'
import logo from '../../src/assets/images/logo2.PNG'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-0">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" className="logo"/>
            {/* <span className="text-danger">Re</span><span className="text-success">Act</span> */}
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contacts">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/weather">
                  Weather
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/crud">
                  Crud
                </Link>
              </li>

            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2 rounded-0"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-sm btn-outline-success rounded-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
