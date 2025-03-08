import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';

import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/about/AboutPage';
import FaqPage from './landing_page/faq/FaqPage';
import SignupPage from './landing_page/signup/SignupPage';
import LoginPage from './landing_page/login/LoginPage';
import WallOfGratPage from './landing_page/wallofgrat/WallOfGratPage';
import TermsPage from './landing_page/terms/TermsPage';
import PrivacyPage from './landing_page/privacy/PrivacyPage';
import HelpCenterPage from './landing_page/helpcenter/HelpCenterPage';
import AndroidPage from './landing_page/apps/android/AndroidPage';
import IosPage from './landing_page/apps/ios/IosPage';
import SearchPage from './landing_page/search/SearchPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/wallofgrat" element={<WallOfGratPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/helpcenter" element={<HelpCenterPage />} />
      <Route path="/android" element={<AndroidPage />} />
      <Route path="/ios" element={<IosPage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);