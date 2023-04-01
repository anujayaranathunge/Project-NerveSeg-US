import "./form.css"
import {useState} from "react";

const RegFormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const {label, errorMessage, onChange, id, ...inputProps} = props;
    const handleFocus = (e) => {
        setFocused(true);
    };

    return(
        <div className="formInput">
            <label>{label}</label>
            <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()}/>
            <span>{errorMessage}</span>


        </div>
    );
 };
 export default RegFormInput