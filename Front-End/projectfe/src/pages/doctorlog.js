
import React, { useState } from "react";
import loginImg from "../components/loging/doctor.jpg";
import "../components/loging/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';

export const Doctor = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 p-0">
          <img src={loginImg} alt="example image" className="w-100 h-100" />
        </div>
        <div className="col-md-6 d-flex  justify-content-center form-container">
          
          <form className="login-form">
            <div className="login-name">
                <h2 className="mb-4">Doctor Login</h2>
                </div>
            <div className="form-group mb-3 row">
              <label htmlFor="doctorId" className="col-sm-1 col-form-label">
                DoctorID:
              </label>
              <div className="col-sm-10 mt-2 inputLabel">
                <input
                  type="text"
                  id="doctorId"
                  name="doctorId"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="form-group mb-3 row">
              <label htmlFor="password" className="col-sm-1 col-form-label">
                Password:
              </label>
              <div className="col-sm-10 mt-2 inputLabel">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="loging-btn-text">
            <Link to="/insertimageus">
            <button type="submit" className="dloging-btn">
              LOGIN
            </button>
            </Link>
            <div className="forgot-password">
            <p>Forgot Password</p>
            </div>
            <div className="register-here">
            <p>Don't have an account? <Link to ="/doctor-reg" className="register-hereLink">REGISTER HERE</Link></p>
            </div>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
};


