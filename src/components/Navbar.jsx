import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleNavItemClick = (event) => {
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach((navItem) => {
      navItem.classList.remove("active");
    });
    event.currentTarget.classList.add("active");
  };

  return (
    <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
      <div className="toggle" onClick={toggleSidebar}>
        <i className="bx bx-chevron-right"></i>
      </div>

      <div className="logo">
        <img
          src="https://www.asiamediajournal.com/wp-content/uploads/2022/11/SAD-ANIME-PFP-1200x1200.png"
          alt="..."
        />
        <h3>Sakthi S M</h3>
      </div>

      <nav>
        <div className="nav-title">MENU</div>

        <ul>
          <li className="nav-item active" onClick={handleNavItemClick}>
            <i className="bx bxs-dashboard"></i>
            <span>Dashboard</span>
          </li>
          <li className="nav-item" onClick={handleNavItemClick}>
            <i className="bx bxs-bar-chart-alt-2"></i>
            <span>Analytics</span>
          </li>
        </ul>

        <hr />

        <div className="nav-title">Supports</div>

        <ul>
          <li className="nav-item">
            <i className="bx bxs-help-circle"></i>
            <span>Get Help</span>
          </li>
          <li className="nav-item">
            <i className="bx bxs-message-dots"></i>
            <span>Send Feedback</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
