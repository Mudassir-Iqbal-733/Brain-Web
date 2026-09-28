import { Navigate, Route, Routes } from "react-router-dom";

import Login from "./components/auth/Login";
import ProtectedRoute from "./components/ProtectedRoute";

import DashboardLayout from "./pages/dashboard/DashboardLayout";
import Dashboard from "./pages/dashboard/Dashboard";

import HeaderSettings from "./components/website-settings/HeaderSettings";
import FooterSettings from "./components/website-settings/FooterSettings";
import CEOSettings from "./components/website-settings/CEOSettings";
import WebsiteSettingsLayout from "./components/website-settings/WebsiteSettingsLayout";
import ContactSettings from "./components/website-settings/ContactSettings";
import NewsletterSettings from "./components/website-settings/NewsletterSettings";
import GeneralSettings from "./components/website-settings/GeneralSettings";

import Programs from "./pages/programs/Programs";
import AddProgram from "./pages/programs/AddProgram";
import EditProgram from "./pages/programs/EditProgram";
import ViewProgram from "./pages/programs/ViewProgram";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin/login" replace />} />

      <Route path="/admin/login" element={<Login />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/admin" element={<DashboardLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />

          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<Navigate to="settings/header" replace />} />

            <Route path="settings" element={<WebsiteSettingsLayout />}>
              <Route index element={<Navigate to="header" replace />} />

              <Route path="header" element={<HeaderSettings />} />
              <Route path="footer" element={<FooterSettings />} />
              <Route path="ceo" element={<CEOSettings />} />
              <Route path="general" element={<GeneralSettings />} />
              <Route path="contact" element={<ContactSettings />} />
              <Route path="newsletter" element={<NewsletterSettings />} />
            </Route>
          </Route>

          <Route path="programs" element={<Programs />} />
          <Route path="programs/add" element={<AddProgram />} />
          <Route path="programs/edit/:id" element={<EditProgram />} />
          <Route path="programs/view/:id" element={<ViewProgram />} />
        </Route>
      </Route>

      <Route
        path="*"
        element={<Navigate to="/admin/dashboard/settings/header" replace />}
      />
    </Routes>
  );
};

export default App;