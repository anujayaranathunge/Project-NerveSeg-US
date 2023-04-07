import React from "react";
//import InfoEditor from '../components/InfoEditor';
import { Container, Col,  Row, } from "react-bootstrap";
import PatientInfo from "../components/patientProfiles/PatientInfo";
import { useLocation } from "react-router-dom";

const PatientProfilePatientView = () => {

  const location = useLocation()


  return (
    <Container style={{ height: "768px", padding: "28px" }}>
      <Row
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: "#A4CBCD",
        borderRadius: "20px",
        padding: "35px 10px 25px 30px",
      }}
    >
      <Row style={{ display: "flex", flex: 1, gap: "10px" }}>
        <Col style={{ display: "flex", flexDirection: "column" }}>
          <Row>
            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                height: "80px",
                borderRadius: "20px",
                marginBottom: "15px",
              }}
            >
              <img
                roundedCircle
                style={{ height: "62px", width: "62px" }}
                src="images/user.png"
              />
              <div className="text-truncate">
                <div style={{fontWeight:"bolder"}}>{location.state.id}</div>
                <div>{`ID - ${`20001678`}`}</div>
              </div>
            </div>
          </Row>
          <Row style={{ flex: 1,backgroundColor:'rgb(11, 103, 108, 1)',borderRadius: '20px'}}>
          <div style={{padding: "28px"}}><h4 >Treatments</h4></div>
          </Row>
        </Col>
        <Col style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Row style={{ height: "50%",backgroundColor:'rgb(11, 103, 108, 1)', borderRadius: '20px' }}>
           <div style={{padding: "28px"}}><h4>Doctor Updates</h4></div>
          </Row>
          <Row style={{ height: "50%",backgroundColor:'rgb(11, 103, 108, 1)' ,borderRadius: '20px' }} >
            <div style={{padding: "28px"}}><h4>Patient Progress</h4></div>
          </Row>
        </Col>
      </Row>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          paddingTop: "20px",
        }}
      >
        
      </div>
    </Row>
    </Container>
  );
};

export {PatientProfilePatientView};
