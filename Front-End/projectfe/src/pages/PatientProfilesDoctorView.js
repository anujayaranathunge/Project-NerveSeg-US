import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import PatientInfoCard from "../components/patientProfiles/PatientInfoCard";
import PatientInfoUpdater from "../components/patientProfiles/PatientInfoUpdater";

const PatientProfilesDoctorView = () => {
  return (
    <Container>
      <Row style={{ height: "768px" }}>
        <Col style={{ backgroundColor: "red" }} md={4}>
          <ListGroup>
            {[...new Array(5)].map((patient) => (
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
        <Col style={{ backgroundColor: "green" }} md={8}>
          <PatientInfoUpdater/>
        </Col>
      </Row>
    </Container>
  );
};

export default PatientProfilesDoctorView;
