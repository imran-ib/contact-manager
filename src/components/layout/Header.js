import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar justify-content-between navbar-expand navbar-dark bg-danger">
      <Link to="/" className="navbar-brand">
        Contact Manager
      </Link>

      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <i className="fas fa-home mr-2" />
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact/add" className="nav-link">
              <i className="fas fa-plus mr-2" />
              Add
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact/edit" className="nav-link">
              <i className="fas fa-info mr-2" />
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
