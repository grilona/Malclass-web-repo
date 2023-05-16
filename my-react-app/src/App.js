import "./scss/App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes
} from "react-router-dom";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Toolbar from "./Components/Toolbar/Toolbar";
import Footer from "./Components/Footer/Footer";

import UploadFile from "./Pages/UploadFile/UploadFile";


const App = () => {
  return (
      <div className="App">
        <Toolbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/UploadFile" element={<UploadFile />} />
        </Routes>
        <Footer/>
      </div>
  );
};

export default App;
