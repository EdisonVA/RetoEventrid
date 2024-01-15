
import { useState } from 'react';
import React, { Component } from 'react';
import Axios from 'axios';
import '../App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



export const IngresarComponent= ({setSesion}) => {


    const [Usu,setUsuario] = useState('');
    const [Contra,setContra] = useState('');
  


    const Very = () => {
      Axios.post("http://localhost:3001/very", {
        usuario: Usu,
        contra: Contra
      }).then((response) => {
        setSesion(response.data);
        alert('Ingresaste');
      });
    }

    return (
      <Router>
      <div className="Login">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              Social Eventrid
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
      <div>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
          onChange={(event) => {
            setUsuario(event.target.value);
          }}
            type="text"
            className="form-control"
            placeholder="usuario"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
          onChange={(event) => {
            setContra(event.target.value);
          }}
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button onClick={Very}  className="btn btn-success">
            Ingresar
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </div>
      </div>
        </div>
      </div>
    </Router>
  
    )
  
}
