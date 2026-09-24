import { Navigate, Route, Routes } from "react-router-dom";

import Login from "./components/auth/Login";
import ProtectedRoute from "./components/ProtectedRoute";

import DashboardLayout from "./pages/dashboard/DashboardLayout";
import Dashboard from "./pages/dashboard/Dashboard";

import HeaderSettings from "./components/website-settings/HeaderSettings";
import FooterSettings from "./components/website-settings/FooterSettings";
import CEOSettings from "./components/website-settings/CEOSettings";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin/login" replace />} />

      <Route path="/admin/login" element={<Login />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/admin" element={<DashboardLayout />}>
          <Route
            index
            element={<Navigate to="dashboard/header" replace />}
          />

          <Route path="dashboard" element={<Dashboard />}>
            <Route
              index
              element={<Navigate to="header" replace />}
            />

            <Route path="header" element={<HeaderSettings />} />
            <Route path="footer" element={<FooterSettings />} />
            <Route path="ceo" element={<CEOSettings />} />
          </Route>
        </Route>
      </Route>

      <Route
        path="*"
        element={<Navigate to="/admin/dashboard/header" replace />}
      />
    </Routes>
  );
};

export default App;