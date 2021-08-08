import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home.js';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
<script src="/__/firebase/8.9.0/firebase-app.js"></script>

<script src="/__/firebase/init.js"></script>
      <Home />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
