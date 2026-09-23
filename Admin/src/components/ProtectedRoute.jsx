import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const isLoggedIn = localStorage.getItem("adminLoggedIn") === "true";

  return isLoggedIn ? <Outlet /> : <Navigate to="/admin/login" replace />;
};

export default ProtectedRoute;

