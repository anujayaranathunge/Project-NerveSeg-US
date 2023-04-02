import {Link} from "react-router-dom";
import React, {useState} from "react";
import "./patientReg.css"
import RegFormInput from "./regFormInput";


export const Patientreg = () =>{
    const [values,setValues] = useState({
        FullName:"",
        DateofBirth:"",
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
             name:"DateofBirth",
             type:"date",
             placeholder:"Enter your DOB",
             errorMessage:"",
             labelReg:"Date of Birth :"

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
        <div className="patient">
        <form className="regForm" onSubmit={handleSubmit}>
            <h1 className="P1">Get Started!</h1>
            <h2 className="P2">Patient</h2>
            <h6 className="P3">Already have an account ?</h6>
            <Link className="Link" to='/Home'>Sign in</Link>
            {inputs.map((input) => (
                <RegFormInput
                    key={input.id}
                    {...input}
                    value= {values[input.name]}
                    onChange={onChange}
                />
                ))}
            <button className="BTN">SIGN UP</button>


        </form>
    </div>);


}