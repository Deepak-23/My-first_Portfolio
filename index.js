import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './Assets/css/main.css';
import * as ServiceWorker from './serviceWorker';

ReactDOM.render(<App /> , document.getElementById("root"));
ServiceWorker.unregister();
