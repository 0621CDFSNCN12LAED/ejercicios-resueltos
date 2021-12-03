import React from "react";
import logoDH from "../../assets/images/logo-DH.png";
import { NavLink } from "react-router-dom";

import "./sideBarStyles.css";

function SideBar() {
  return (
    <ul
      className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <NavLink
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/"
      >
        <div className="sidebar-brand-icon">
          <img className="w-100" src={logoDH} alt="Digital House" />
        </div>
      </NavLink>

      <hr className="sidebar-divider my-0" />
      <li className="nav-item">
        <NavLink className="nav-link" activeClassName="active" to="/dashboard">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard - DH movies</span>
        </NavLink>
      </li>
      <hr className="sidebar-divider" />
      <div className="sidebar-heading">Actions</div>
      <li className="nav-item">
        <NavLink className="nav-link" activeClassName="active" to="/pages">
          <i className="fas fa-fw fa-folder"></i>
          <span>Pages</span>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" activeClassName="active" to="/charts">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Charts</span>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" activeClassName="active" to="/tables">
          <i className="fas fa-fw fa-table"></i>
          <span>Tables</span>
        </NavLink>
      </li>
      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
}

export default SideBar;
