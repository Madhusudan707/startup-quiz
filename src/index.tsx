import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { QuizProvider } from './contexts'
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <QuizProvider>
        <App />
      </QuizProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
