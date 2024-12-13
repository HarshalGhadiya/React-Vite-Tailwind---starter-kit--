import React from "react";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

const Applayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Applayout;
