import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./providers/AuthProvider";
// import { AuthContext } from "../Authentication/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
    console.log(location.pathname);
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>

    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to="/signin"></Navigate>
};

export default PrivateRoute;