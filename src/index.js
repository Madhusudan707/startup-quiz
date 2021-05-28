import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { QuizProvider, ResponseProvider } from "./contexts";

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
