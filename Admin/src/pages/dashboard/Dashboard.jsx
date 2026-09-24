import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <Outlet />
    </div>
  );
};

export default Dashboard;