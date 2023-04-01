import React from "react";
import { Container } from "react-bootstrap";
import PatientInfo from "../components/patientProfiles/PatientInfo";

const PatientProfilePatientView = () => {
  return (
    <Container style={{ height: "768px", padding: "28px" }}>
      <PatientInfo />
    </Container>
  );
};

export {PatientProfilePatientView};
