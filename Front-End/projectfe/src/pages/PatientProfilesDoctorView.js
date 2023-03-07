import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import PatientInfoCard from "../components/patientProfiles/PatientInfoCard";
import PatientInfo from "../components/patientProfiles/PatientInfo";

const PatientProfilesDoctorView = () => {
  return (
    <Container style={{ height: "768px", padding: "28px" }}>
      <Row style={{ height: "100%" }}>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
          md={4}
        >
          <h1
            style={{
              fontWeight: "800",
              // fontSize: "32px",
              color: "#1612C8",
              paddingBottom: "37px",
            }}
          >
            Patient Profiles
          </h1>
          <ListGroup
            style={{
              flex: 1,
              overflow: "scroll",
              rowGap: "11px",

              paddingRight: "20px",
            }}
          >
            {[...new Array(50)].map((patient) => (
              <PatientInfoCard
                patientName={
                  "sss 423324213123 423324213123 423324213123 423324213123 fsdddddddddddddd"
                }
                patientId={
                  "423324213123 423324213123 423324213123 423324213123 fsdddddddddddddd"
                }
              />
            ))}
          </ListGroup>
        </Col>
        <Col style={{ height: "100%" }} md={8}>
          <PatientInfo />
        </Col>
      </Row>
    </Container>
  );
};

export default PatientProfilesDoctorView;
