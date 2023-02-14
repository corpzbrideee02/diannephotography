import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./App.css";
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route } from "react-router-dom";
import Travel from "./components/Travel";
import Photography from "./components/Photography";
import Home from "./components/Home";
import Nature from "./components/Nature";
import Music from "./components/Music";
import Sidebar from './components/Sidebar';
import About from './components/About';
import Arts from './components/Arts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        {/* page not found route */}
        <Route
              path="*"
              element={
                  <main className="flex items-center justify-center" >
                   <img  src={require("./images/404_black.png")} width="500" alt="Page Not found"/>
                </main>
              }/>
        <Route path="/" element={<Sidebar />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/nature" element={<Nature />} />
          <Route path="/travels" element={<Travel />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/music" element={<Music />} />
          <Route path="/arts" element={<Arts />} />
        
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
