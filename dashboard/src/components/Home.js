import React from "react";
import "./Home.css";
import Sidebar from "./Sidebar";
import DashboardPage from "./dashboard/DashboardPage";

function Home() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <DashboardPage />
      </div>
    </div>
  );
}

export default Home;
