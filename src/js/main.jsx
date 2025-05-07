import React from "react";
import ReactDOM from "react-dom/client";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// index.css'
import "../styles/index.css";
import "../styles/calendar.css";
import "../styles/botonera.css"
import "../styles/lungs.css"
import "../styles/buds.css"
import "../styles/body.css"

// components
import Layout from "./components/Layout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Layout></Layout>
  </React.StrictMode>,
);
