import React from "react";
import {  Row, Col, Button,Image, Link } from 'react-bootstrap';

export const Home = () =>{
    return(
    <>
      <Row>
        <Col>
        <br/>
        <div className="welcometexthome">
          <h4>Welcome to</h4>
          <h1>NerveSeg-US</h1>
        </div>
        </Col>
        
        <Col className="col01">
            <br/>
          <Col>
          <div className="homeicone">
          <img
                  alt=""
                  src="images/doctor.png"
                  width="250"
                  height="242"
                />
                <br/>
                <br/>
               <h4 className="texthome">Sign in as a Doctor</h4> 
               <a href="/insertimageus" class="text-light text-decoration-none">
               <Button className="buttonSinein">SIGN IN</Button>
               </a>
               </div>
          </Col>
          <br/>
        </Col>
        <Col className="col01">
            <br/>
          <Col>
          <div className="homeicone">
          <img
                  alt=""
                  src="images/hospitalisation.png"
                  width="250"
                  height="266"
                />
                <br/>
                
               <h4 className="texthome">Sign in as a Patient</h4> 
               <a href="/patientlog" class="text-light text-decoration-none">
               <Button className="buttonSinein">SIGN IN</Button>
               </a> 
               </div>
          </Col>
        </Col>
        
      </Row>
        </>
    )
}
export default Home;