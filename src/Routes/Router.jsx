import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";

import Page404 from "../Errors/Page404";
import UserPrivateRoute from "../AuthGuard/UserPrivateRoute";
import Login from "../pages/Auth/Login";
import User from "../pages/User/User";

const Applayout = lazy(() => import("../Layout/Applayout"));


const Router = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Applayout />}>
                    <Route index element={<User />} />
                    {/* <Route path="/login" element={<Login />} /> */}


                    {/* Application Routes with Authentication */}
                    <Route element={<UserPrivateRoute />}>
                        <Route path="/login" element={<Login />} />
                    </Route>

                    {/* Error Routes */}
                    <Route path="*" element={<Page404 />} />
                </Route>
            </Routes>
        </Suspense>
    );
};

export default Router;
