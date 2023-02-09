import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./App.css";
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WithTopBar from "./components/WithTopBar";

import Travel from "./components/Travel";
import Photography from "./components/Photography";
import Home from "./components/Home";
import Nature from "./components/Nature";
import Music from "./components/Music";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*  <App /> */}
    <BrowserRouter>
      <Routes>
        
        {/* Pages with external access */}
        <Route path="/" element={<WithTopBar />}>
          <Route exact path="" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/photography" element={<Photography />} />
          <Route path="/travels" element={<Travel />} />
          <Route path="/music" element={<Music />} />
          <Route path="/nature" element={<Nature />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
