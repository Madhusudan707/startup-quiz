import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { QuizProvider, ResponseProvider } from './contexts'
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <QuizProvider>
        <ResponseProvider>
          <App />
        </ResponseProvider>
      </QuizProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
