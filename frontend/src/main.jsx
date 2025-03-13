import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import App from './App';
// import Home from './pages/home';
// import Signin from './pages/signin';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Router>
//       <App />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<Signin />} />
//       </Routes>
//     </Router>
//   </React.StrictMode>
// );
