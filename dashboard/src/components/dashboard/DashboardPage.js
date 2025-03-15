import React from "react";
import Notification from "../Notification";
import ProfileCard from "./ProfileCard"; 
import SupportersCard from "./SupportersCard";

function DashboardPage() {
  return (
      <>
        <Notification />
        <ProfileCard />
        <SupportersCard />
      </>
  );
}

export default DashboardPage;