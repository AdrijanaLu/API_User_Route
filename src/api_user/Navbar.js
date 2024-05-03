import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
      <nav>
        <Link style={{ margin: "10px", color: "rgb(70, 70, 70)" }} to="/">
          Home
        </Link>
        <Link style={{ margin: "10px", color: "rgb(70, 70, 70)" }} to="/users">
          Users
        </Link>
        {/* <Link style={{ margin: "10px", color: "rgb(70, 70, 70)" }} to="/users/:username">
          Users Detail
        </Link> */}
        <Link style={{ margin: "10px", color: "rgb(70, 70, 70)" }} to="/search">
          Search
        </Link>
        <Outlet />
      </nav>
  );
}
