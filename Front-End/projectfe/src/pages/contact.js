import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Form, FormGroup, Input, Label, Button, Row, Col } from 'react-bootstrap';

export const Contact = () => {
 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_1ia04kd', 'template_aggy7uk', form.current, 'UCdXLti3pSNxZB5AV')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
          form.current.reset(); // Reset the form
          alert("Your message has been sent successfully.. \nThank You!"); // Popup message
      }, (error) => {
          console.log(error.text);
          
      }); 
  };
  /////
  return (
    <Row className='contactbg'>
      <Col>
    <div className='contactdiv1'>
      <h1>Contact Us</h1>
      <br/>
      <form ref={form} onSubmit={sendEmail}>
      <label className='contactText'>Name :</label>
      <input className='contactTextbox' type="text" name="user_name" placeholder='Enter Your Full Name'/>
      <br/>
      <label className='contactText'>Email :</label>
      <input className='contactTextboxA' type="email" name="user_email" placeholder='Enter Your Email' />
      <br/>
      <label className='contactmasg'>Message :</label>
      <textarea className='contactTextA' name="message" />
      <input className='contacButton' type="submit" value="Contact Us"/>
    </form>
      <br/>
    </div>
    </Col>

    <Col>
    <div className='contactdiv2'>
    <p>
            <img
                  alt=""
                  src="images/Clocation.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
                123 Street, Bambalapitiya, Colombo</p>
            <p>
            <img
                  alt=""
                  src="images/Cemail.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
                nervesegus.gmail.com</p>

            <p>
            <img
                  alt=""
                  src="images/Cphone.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
                +94778694522</p>
                </div>
      
    </Col>
    <Col>
    <div >
    <img className='contactDImage'
         alt=""
         src="images/CDoctorimg.jpg"
         width="250"
         height="266"
                  />
    </div>
    </Col>
    </Row>
  );
};

export default Contact;
