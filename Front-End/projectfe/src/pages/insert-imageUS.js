import React, { useState } from 'react';
import { Form, FormGroup,  Col,  FormControl, FormLabel, Button, Row } from 'react-bootstrap';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    patientId: '',
    treatment: ''
  });

  const handleUplode = (event) => {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <>
    <Row>
    <Col>
    <div>
        <br/>
      <Form onSubmit={handleUplode}>
        <FormGroup>
          <FormLabel> Patient Name:</FormLabel>
          <FormControl type="text" value={formData.name} onChange={(event) => setFormData({...formData, name: event.target.value})} />
        </FormGroup>

        <FormGroup>
          <FormLabel>Patient ID:</FormLabel>
          <FormControl type="text" value={formData.email} onChange={(event) => setFormData({...formData, email: event.target.value})} />
        </FormGroup>

        <Button variant="primary" type="file">
        Insert an Ultrasound Image
        </Button>

        <Button type="submit">Uplode Image</Button>

       
      </Form>
    </div>
    </Col>

    <Col>
    <div>
        view image
    </div>
    </Col>

    </Row>
    <Row>
        <div>
            <Form>
            <FormGroup>
            <FormLabel>Treatments</FormLabel>
            <FormControl as="textarea" rows={3} value={formData.message} onChange={(event) => setFormData({...formData, message: event.target.value})} />
            </FormGroup>
            </Form>
        </div>
    </Row>
    <Row>
        <Col>
        <Button variant="primary">View Patient Profiles</Button>
        </Col>
    </Row>
    </>
  );
}

export default ContactForm;