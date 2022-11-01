import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Appbar from "./Navbar/Appbar";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Appbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
