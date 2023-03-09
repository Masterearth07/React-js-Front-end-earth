
import React from "react";
import './App.css';
import { LoginPage } from './Page/loginPage';
import { FirstPage } from "./Page/firstPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/firstpage" element={<FirstPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
