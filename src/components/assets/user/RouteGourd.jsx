import React from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const RouteGuard = ({ component: Component, roleRequired, ...rest }) => {
  const [authenticated, setAuthenticated] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [role, setRole] = React.useState("");

  React.useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await axios.get("http://localhost:8080/checkSession", { withCredentials: true });
        setAuthenticated(true);
        setRole(response.data.role);
      } catch (error) {
        setAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };
    checkSession();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  if (role !== roleRequired) {
    return <Navigate to="/" />;
  }

  return <Component {...rest} />;
};

export default RouteGuard;