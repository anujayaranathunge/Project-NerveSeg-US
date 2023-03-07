import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import PatientInfoCard from "../components/patientProfiles/PatientInfoCard";
import PatientInfoUpdater from "../components/patientProfiles/PatientInfoUpdater";

const PatientProfilesDoctorView = () => {
  return (
    <Container style={{ height: "768px" }}>
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
          <ListGroup style={{ flex: 1, overflow: "scroll", rowGap: "11px" }}>
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
          <PatientInfoUpdater />
        </Col>
      </Row>
    </Container>
  );
};

export default PatientProfilesDoctorView;
