// import React from "react";
// import { Navigate } from "react-router-dom";

// const PrivateRoute = ({ children }) => {
//   const isAuthenticated = localStorage.getItem("AUTH_TOKEN") !== null;

//   return isAuthenticated ? children : <Navigate to="/" replace />;
// };

// export default PrivateRoute;
import React from "react";
import { Navigate } from "react-router-dom";

class PrivateRoute extends React.Component {
  render() {
    const { children } = this.props;
    const isAuthenticated = localStorage.getItem("AUTH_TOKEN") !== null;

    return isAuthenticated ? children : <Navigate to="/login" replace />;
  }
}

export default PrivateRoute;