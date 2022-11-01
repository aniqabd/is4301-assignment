import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Appbar from "./Navbar/Appbar";
import Academic from "./Pages/Academic";
import Home from "./Pages/Home";
import Admission from "./Pages/Admission";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Appbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/academics" element={<Academic/>} />
            <Route path="/admission" element={<Admission/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
