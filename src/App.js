import React from "react";
import "./App.css";
import Home from "./pages/home";
import BudgetApp from "./pages/budgetApp";
import TransferFund from "./pages/fundTransfer";
import LogOut from "./pages/logOut";
import ClientDashboard from "./clientLayout/clientDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <div id="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ClientDashboard></ClientDashboard>}>
              <Route index element={<Home></Home>}></Route>
              <Route index element={<ClientDashboard></ClientDashboard>}></Route>
              <Route path="BudgetApp" element={<BudgetApp></BudgetApp>}></Route>
              <Route path="TransferFund" element={<TransferFund></TransferFund>}></Route>
              <Route path="*" element={<LogOut></LogOut>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App