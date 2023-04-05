/*import {Link} from "react-router-dom";
import React, {useState} from "react";
import "./doctorReg.css"
import RegFormInput from "./regFormInput";
import {wait} from "@testing-library/user-event/dist/utils";


export const Doctorreg = () =>{
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
            labelReg:"Full Name :",
            pattern:"^[A-Za-z0-9]{3,16}$",
            required:true,
        },
        {
            id:2,
            name:"Doctor ID",
            type:"text",
            placeholder:"Enter your Medical ID",
            errorMessage:"Medical number should be 3-8 characters and shouldn't include any special characters! ",
            labelReg:"Doctor ID :",
            pattern:"^[A-Za-z0-9]{3,8}$",
            required:true,

        },
        {
            id:3,
            name:"Email",
            type:"Email",
            placeholder:"Enter your Email",
            errorMessage:"It should be a valid email address!",
            labelReg:"Email :",
            required:true,
        },
        {
            id:4,
            name:"Password",
            type:"password",
            placeholder:"Enter your password",
            errorMessage:"Password should be 8-10 characters and include at least 1 letter,1 number and 1 special character! ",
            labelReg:"Password :",
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
        <div className="regDoctor">
            <form className="regFormDoc" onSubmit={handleSubmit}>
                <h1 className="D1">Get Started!</h1>
                <h2 className="D2">Doctor</h2>
                <h6 className="D3">Already have an account ?</h6>
                <Link className="regLink1" to='/Home'>Sign in</Link>
                {inputs.map((input) => (
                    <RegFormInput
                        key={input.id}
                        {...input}
                        value= {values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <button className="BTN1">SIGN UP</button>


            </form>
        </div>);


}*/

import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import "./patientReg.css";
//import RegFormInput from "./regFormInput";

export const Doctorreg = () => {
  const [values, setValues] = useState({
    FullName: "",
    DoctoeID: "",
    Email: "",
    Password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);

  let Linking;

  const myhistory = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [text, setName] = useState("");
  const [id, setID] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:3001/doctor-reg", {
          email,
          password,
          text,
          id,
        })
        .then((res) => {
          if (res.data === "exist") {
            alert("User already exists");
          } else if (res.data === "notexist") {
            alert("user registerd");
            myhistory("/doctorlog");
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
    <div className="patient">
      <form className="regForm" onSubmit={handleSubmit} action="POST">
        <h1 className="P1">Get Started!</h1>

        <div>
          <label htmlFor="doctorId">Full Name:</label>
          <div>
            <input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Enter Your Full Name"
              id=""
              name=""
              errorMessage="Username should be 3-16 characters and shouldn't include any special characters!"
              pattern="^[A-Za-z0-9]{3,16}$"
              required="true"
            />
          </div>
        </div>

        <div>
          <label htmlFor="doctorId">Doctor ID:</label>
          <div>
            <input
              type="id"
              onChange={(e) => {
                setID(e.target.value);
              }}
              placeholder="Enter Your Date of Birth"
              id=""
              name=""
              errorMessage=""
              required="true"
            />
          </div>
        </div>

        <div>
          <label htmlFor="doctorId">Email:</label>
          <div>
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter Your Email"
              id=""
              name=""
              errorMessage="It should be a valid email address!"
              required="true"
            />
          </div>
        </div>

        <div>
          <label htmlFor="doctorId">Password:</label>
          <div>
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Enter Your Password"
              id=""
              name=""
              errorMessage="Password should be 8-10 characters and include at least 1 letter,1 number and 1 special character! "
              pattern="`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,10}$`"
              required="true"
            />
          </div>
        </div>

        <button className="BTN" type="submit" onClick={submit}>
          SIGN UP
        </button>

        <h2 className="P2">Register as a Doctor</h2>
        <h6 className="P3">Already have an account ?</h6>
        <Link className="Link" to="/doctorlog">
          Sign in
        </Link>
      </form>
    </div>
  );
};
export default Doctorreg;
