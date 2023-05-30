import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WaitList from './Components/WaitList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/waitlist" element={<WaitList />}/>
          {/* <Route index element={<App />} />
          <Route path="/waitlist" element={<WaitList />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

