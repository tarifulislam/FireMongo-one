
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const { user , loading } = useContext(AuthContext)
    const location = useLocation(); // it give path name
    console.log(location.pathname);

    if(loading){
        return <div className=" text-4xl text-red-300">Loading...</div> // 
     }

     if(user){  
         return children;
     }
     return <Navigate state={location.pathname} to="/login"></Navigate> 

};

export default PrivateRoutes;