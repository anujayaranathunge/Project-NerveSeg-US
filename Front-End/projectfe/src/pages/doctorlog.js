import {Link} from "react-router-dom";
import React, {useState} from "react";
import "./doctor.css"
import FormInput from "./FormInput";


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