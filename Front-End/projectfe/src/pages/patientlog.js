import React, { useState } from "react";
import axios from "axios";
import loginImg from "../components/loging/patient.jpg";
import "../components/loging/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
//import e from "express";

export const Patient = () => {
  const myhistory = useNavigate();
  const [text, setName] = useState("");
  const [password, setPassword] = useState("");
  

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:3001/patientlog", {
          text,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            myhistory("/PatientProfilePatientView",{state:{id:text}});
          } else if (res.data === "notexist") {
            alert("User have not sign up");
          }
        })
        .catch((e) => {
          alert("Failed to submit form. Please try again later.");
          console.log(e);
        });
    } catch {
      console.log(e);
    }
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 p-0">
          <img src={loginImg} alt="example image" className="w-100 h-100" />
        </div>
        <div className="col-md-6 d-flex  justify-content-center form-container">
        
          <form className="login-form" action="POST">
          <h2 className="mb-4">Patient Login</h2>
            <div className="login-name"></div>
            <div className="form-group mb-3 row">
              <label style={{fontWeight:"bolder"}} htmlFor="doctorId" className="col-sm-1 col-form-label">
                 Name:
              </label>
              <div className="col-sm-10 mt-2 inputLabel">
                <input
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="Enter Your User Name"
                  id=""
                  name=""
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="form-group mb-3 row">
              <label style={{fontWeight:"bolder"}} htmlFor="password" className="col-sm-1 col-form-label">
                Password:
              </label>
              <div className="col-sm-10 mt-2 inputLabel">
                <input
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Enter Your Password"
                  id=""
                  name=""
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="loging-btn-text">
              <button type="submit" className="dloging-btn" onClick={submit}>
                LOGIN
              </button>

              <div className="forgot-password">
                <p>Forgot Password</p>
              </div>
              <div className="register-here">
                <p>
                  Don't have an account?{" "}
                  <Link to="/patient-reg" className="register-hereLink">
                    REGISTER HERE
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Patient;