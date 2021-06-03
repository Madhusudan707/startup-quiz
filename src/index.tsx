import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {QuizProvider} from './contexts'
import App from "./App";


ReactDOM.render(
  <React.StrictMode>
    <QuizProvider>
    <App />
    </QuizProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
