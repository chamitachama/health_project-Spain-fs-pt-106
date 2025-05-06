import React from "react";
import ReactDOM from "react-dom/client";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// index.css'
import "../styles/index.css";
import "../styles/calendar.css";

// components
// import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Layout></Layout>
  </React.StrictMode>,
);
