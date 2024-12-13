import React from "react";
import { Navigate, Outlet } from "react-router";

const UserPrivateRoute = () => {
    const token = false;
    return <>{token ? <Outlet /> : <Navigate to="/" replace />}</>;
};

export default UserPrivateRoute;
