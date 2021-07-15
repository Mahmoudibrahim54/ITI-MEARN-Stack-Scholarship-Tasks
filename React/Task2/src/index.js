import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch,NavLink as Link } from 'react-router-dom'
import User from './Components/user';
import ErrorComp from './Components/ErrorComp';
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";



ReactDOM.render(


  <BrowserRouter>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand active" exact active  to="/">Navbar</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link exact active className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link active className="nav-link active" to="/users">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link exact active className="nav-link active" to="/register">
                NOTFOUND
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
     
    
  {/* <ul className="alert alert-dark">
      <li><Link exact activeclassNameName="active" to="/">Home</Link></li>
      <li><Link exact activeclassNameName="active" to="/users">Users</Link></li>
      <li><Link activeclassNameName="btn" to="/test">NOTFOUND</Link></li>
  </ul> */}
  
  <Switch>
      <Route exact path="/users" component={User} />
      <Route exact path="/" component={App} />
      <Route path="*" component={ErrorComp} />
  </Switch>
</BrowserRouter>
, document.querySelector('#root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
