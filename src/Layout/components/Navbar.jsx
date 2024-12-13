import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
            <NavLink to="/">Home Page</NavLink>
            <NavLink to="/about">About Page</NavLink>
            <NavLink to="/login">Login Page</NavLink>
            <NavLink to="/admin">Admin Page</NavLink>
        </div>
    );
};

export default Navbar;
