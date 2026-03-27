"use client";
import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scroller, setScroller] = useState(false);
  useEffect(() => {
    const handleScroller = () => {
      setScroller(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroller);
    return () => window.removeEventListener("scroll", handleScroller);
  }, []);
  return (
    <div className="nav">
      <header className={`header ${scroller ? "scrolled" : ""}`}>
        <nav className="navbar">
          <Link to="/">DASHBOARD</Link>
          <Link to="/addexpense">ADD EXPENSE</Link>
          <Link to="/settings">SETTINGS</Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
