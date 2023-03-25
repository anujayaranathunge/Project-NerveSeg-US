import React, { useState } from 'react';
import { Form, FormGroup, Input, Label, Button, Row, Col } from 'react-bootstrap';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData); // or send data to server
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Row className='contactbg'>
      <Col>
    <div className='contactdiv1'>
      <h1>Contact Us</h1>
      <br/>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name:</Form.Label>
        <Form.Control className="text-box-one" type="id" placeholder="Pleace Enter Your Full Name"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>E-mail:</Form.Label>
        <Form.Control className="text-box-one" type="id" placeholder="Pleace Enter Your E-mail" />
      </Form.Group><br/>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Message:</Form.Label>
        <Form.Control as="textarea" rows={4} className="text-box-one" type="id"/>
        <br/>
      </Form.Group>
        <Button className='contacButton' color="primary" type="submit">Contact Us</Button>
      </Form>
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
