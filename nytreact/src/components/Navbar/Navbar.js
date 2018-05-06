import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";



const Navbar = props => (

<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a className="navbar-brand" href="/">Mongo Scraper</a>
  <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01"
    aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home
          <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/saved">Saved Articles</a>
      </li>
      <li className="nav-item">
        <a className="btn btn-danger scrape-new">SCRAPE NEW ARTICLES!</a>
      </li>
    </ul>
  </div>
</nav>

);

export default Navbar;