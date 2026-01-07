import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";
import { ClimbingBoxLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext); 
    const location = useLocation();
    if (loading) {
        return (
            <div className="h-[90vh] flex items-center justify-center bg-[#0b0f1a]">
                <ClimbingBoxLoader color="#22d3ee" />
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login" state={location.pathname} />;
    }

    return children;
};

export default PrivateRoute;