import React from "react";
import { Route, Routes } from "react-router-dom";
import "./Home.css";
import Sidebar from "./Sidebar";
import DashboardPage from "./dashboard/DashboardPage";
import Profile from "./profile/Profile";
import ExploreCreator from "./exploreCreator/ExploreCreator";
import Gifts from "./gifts/Gifts";
import Wishlist from "./wishlist/Wishlist";
import Orders from "./orders/Orders";
import Shop from "./shop/Shop";
import Publish from "./publish/Publish";
import Supporters from "./supporters/Supporters";
import Wallet from "./wallet/Wallet";
import Settings from "./settings/Settings";

function Home() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Routes>
              <Route exact path='/' element={<DashboardPage />}/>
              <Route path="/profile" element={<Profile />}/>
              <Route path="/explore-creator" element={<ExploreCreator />}/>
              <Route path="/gifts" element={<Gifts />}/>
              <Route path="/wishlist" element={<Wishlist />}/>
              <Route path="/orders" element={<Orders />}/>
              <Route path="/shop" element={<Shop />}/>
              <Route path="/publish" element={<Publish />}/>
              <Route path="/supporters" element={<Supporters />}/>
              <Route path="/wallet" element={<Wallet />}/>
              <Route path="/settings" element={<Settings />}/>
        </Routes>
      </div>
    </div>
  );
}

export default Home;
