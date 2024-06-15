"use strict";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./entries/App";
import "./entries/tailwind.css";
import "./entries/index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
