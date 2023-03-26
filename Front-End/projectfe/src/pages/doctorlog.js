import React, { useState } from "react";
import loginImg from "../components/loging/doctor.jpg";
import "../components/loging/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Doctor = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 p-0">
          <img src={loginImg} alt="example image" className="w-100 h-100" />
        </div>
        <div className="col-md-6 d-flex  justify-content-center form-container">
          
          <form className="login-form">
            <h2 className="mb-4">Doctor Login</h2>
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
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
          
        </div>
      </div>
    </div>
  );
};
