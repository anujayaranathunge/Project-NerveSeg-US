import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='bg-dark text-light'>
      <Container>
        <Row>
          <Col md={4}>
            <br/>
          <h3 className='text-warning'>NerveSeg-US</h3>
          <p>Identification of source of pain through nerve segmentation of ultrasound medical images.</p>
          </Col>

          <Col md={4} >

          <br/>
          
            <div className='getintuch'>
            <h5 className='text-warning'>Get In Touch</h5>
            <br/>
            <p>
            <img
                  alt=""
                  src="images/location.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
                123 Street, Bambalapitiya, Colombo</p>
            <p>
            <img
                  alt=""
                  src="images/email.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
                nervesegus.gmail.com</p>

            <p>
            <img
                  alt=""
                  src="images/telephone.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
                +94778694522</p>
                </div>
          </Col>
          
          <Col md={2}>
          <br/>
            <h5 className='text-warning'>Quick Links</h5>
            <ul className="list-unstyled, variant-dark">
              <li><a href="/home" class="text-light text-decoration-none">Home</a></li>
              <li><a href="/about" class="text-light text-decoration-none">About</a></li>
              <li><a href="/doctorlog" class="text-light text-decoration-none">Doctor</a></li>
              <li><a href="/patientlog" class="text-light text-decoration-none">Patient</a></li>
              <li><a href="/contact" class="text-light text-decoration-none">Contact</a></li>
            </ul>
          </Col>

          <Col md={2}>

          <br/>
            <h5 className='text-warning'>Follow Us</h5>
            <br/>
              <a href="#">
              <img
                  alt=""
                  src="images/facebook.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
                </a>
                {' '}
              <a href="#">
                <img
                  alt=""
                  src="images/twitter.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
                </a>
                {' '}
              <a href="#">
              <img
                  alt=""
                  src="images/insta.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
                </a>
                {' '}
              <a href="#">
              <img
                  alt=""
                  src="images/likein.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
                </a>
        

          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <p>&copy; 2023 NerveSeg-US. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
    
  );
};
export default Footer;
