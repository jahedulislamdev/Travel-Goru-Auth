import { useContext } from "react";
import { DataProvider } from "../Context/ContextProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
   const { user, loading } = useContext(DataProvider);
   const clickedRoute = useLocation();
   console.log(clickedRoute.pathname)
   if (loading) {
      return (
         <div className="flex justify-center items-center h-screen">
            <span className="loading loading-dots loading-lg"></span>
         </div>)
   }
   // If the user is authenticated, render the children components
   if (user) {
      return children;
   }
   return (
      <Navigate state={location.pathname} to={"/login"}></Navigate>
   );
};
PrivateRoute.propTypes = {
   children: PropTypes.node.isRequired, // Ensure children is provided
};
export default PrivateRoute;