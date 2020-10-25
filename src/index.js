import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./globalStyle";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <globalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
