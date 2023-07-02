import { Routes, Route } from "react-router-dom";
import "./App.css";
import AppHeader from "./component/header/header";
import HomePage from "./pages/home";
import Appointment from "./pages/appointment";

function App() {
  return (
    <div className="App">
      <AppHeader />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/appointment" element={< Appointment/> }/>
      </Routes>
    </div>
  );
}

export default App;
