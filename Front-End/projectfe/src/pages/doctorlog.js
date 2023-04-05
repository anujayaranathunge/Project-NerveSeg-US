import React, { useState } from "react";
import axios from "axios";
import loginImg from "../components/loging/doctor.jpg";
import "../components/loging/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
//import e from "express";

export const Doctor = () => {
  const myhistory = useNavigate();
  const [id, setID] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:3001/doctorlog", {
          id,
          password
        })
        .then((res) => {
          if (res.data === "exist") {
            myhistory("/insertimageus");

          } else if (res.data === "notexist") {
            alert("Doctor Your not SignUp Please SignUp");
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
          <h2 className="mb-4">Doctor Login</h2>
            <div className="login-name"></div>
            <div className="form-group mb-3 row">
              <label style={{fontWeight:"bolder"}}  htmlFor="doctorId" className="col-sm-1 col-form-label">
                DoctorID:
              </label>
              <div className="col-sm-10 mt-2 inputLabel">
                <input
                  type="id"
                  onChange={(e) => {
                    setID(e.target.value);
                  }}
                  placeholder="Enter Your DoctorID"
                  id=""
                  name=""
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="form-group mb-3 row">
              <label style={{fontWeight:"bolder"}}  htmlFor="password" className="col-sm-1 col-form-label">
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
                  <Link to="/doctor-reg" className="register-hereLink">
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

export default Doctor;