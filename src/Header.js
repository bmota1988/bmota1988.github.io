import React from "react";
import { Link } from "react-router-dom";
import "./style/Header.css";

function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
        <nav>
          <ul className="nav-list">
            <li className="item-list">
              <Link to="/">About</Link>
            </li>
            <li className="item-list">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="item-list">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <a href="./public/Resume - Bruno Mota.pdf" download>
          <button className="resume-button">Resume</button>
        </a>
      </div>
    </header>
  );
}

export default Header;
