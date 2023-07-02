import { Routes, Route } from "react-router-dom";
import "./App.css";
import AppHeader from "./component/header/header";
import HomePage from "./pages/home";
import Appointment from "./pages/appointment";
import React, { useState } from "react";
import USerContext from "./context/userContext";

function App() {
  const [currentUSer, setCurrentUser] = useState({
    name: "Adewale Tobi",
    gmail: "adewale@gmail.com",
    phone: "08059786545",
  });

  return (
    <div className="App">
   
      <USerContext.Provider value={currentUSer}>
        <AppHeader />

    

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </USerContext.Provider>
    </div>
  );
}

export default App;
