import React from "react";
import CreditCards from "pages/CreditCards";
import SettingPageThree from "pages/SettingPageThree";
import MainDashboard from "pages/MainDashboard";
import Accounts from "pages/Accounts";
import Investments from "pages/Investments";
import SettingPageTwo from "pages/SettingPageTwo";
import Loan from "pages/Loan";
import Transaction from "pages/Transaction";
import SettingPageOne from "pages/SettingPageOne";
import Services from "pages/Services";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/services" element={<Services />} />
        <Route path="/settingpageone" element={<SettingPageOne />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/settingpagetwo" element={<SettingPageTwo />} />
        <Route path="/investments" element={<Investments />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/maindashboard" element={<MainDashboard />} />
        <Route path="/settingpagethree" element={<SettingPageThree />} />
        <Route path="/creditcards" element={<CreditCards />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
