
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
            <button type="submit" className="dloging-btn">
              LOGIN
            </button>
            <div className="forgot-password">
            <p>Forgot Password</p>
            </div>
            <div className="register-here">
            <p>Don't have an account? <a className="register-hereLink" href="signup.html">REGISTER HERE</a></p>
            </div>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
};

import {Link} from "react-router-dom";
import React, {useState} from "react";
import "./doctor.css"
import FormInput from "./FormInput";
import {wait} from "@testing-library/user-event/dist/utils";


export const Doctor = () =>{
    const [values,setValues] = useState({
        FullName:"",
        DoctorID:"",
        Email:"",
        Password:""
    })


    const inputs = [
        {
            id:1,
            name:"FullName",
            type:"text",
            placeholder:"Enter your fullName",
            errorMessage:"Username should be 3-16 characters and shouldn't include any special characters!",
            label:"Full Name :",
            pattern:"^[A-Za-z0-9]{3,16}$",
            required:true,
        },
        {
            id:2,
            name:"Doctor ID",
            type:"text",
            placeholder:"Enter your Medical ID",
            errorMessage:"Medical number should be 3-8 characters and shouldn't include any special characters! ",
            label:"Doctor ID :",
            pattern:"^[A-Za-z0-9]{3,8}$",
            required:true,

        },
        {
            id:3,
            name:"Email",
            type:"Email",
            placeholder:"Enter your Email",
            errorMessage:"It should be a valid email address!",
            label:"Email :",
            required:true,
        },
        {
            id:4,
            name:"Password",
            type:"password",
            placeholder:"Enter your password",
            errorMessage:"Password should be 8-10 characters and include at least 1 letter,1 number and 1 special character! ",
            label:"Password :",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,10}$`,
            required:true,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    };



    console.log(values);
    let Linking;
    return (
        <div className="doctor">
            <form onSubmit={handleSubmit}>
                <h1 className="D1">Get Started!</h1>
                <h2 className="D2">Doctor</h2>
                <h6 className="D3">Already have an account ?</h6>
                <Link className="Link1" to='/Home'>Sign in</Link>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value= {values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <button className="BTN1">SIGN UP</button>


            </form>
        </div>);


}

