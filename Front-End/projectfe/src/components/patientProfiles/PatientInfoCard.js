import React from "react";
import { ListGroup } from "react-bootstrap";
import Image from "react-bootstrap/Image";
const PatientInfoCard = ({ patientName, patientId }) => {
  return (
    <ListGroup.Item
      style={{
        display: "flex",
        gap: "11px",
        alignItems: "center",
        height: "80px",
        backgroundColor: "#9BB4F3",
        borderRadius: "20px",
      }}
      eventKey={patientId}
    >
      <img
        roundedCircle
        style={{ height: "62px", width: "62px" }}
        src="images/user.png"
      />
      <div className="text-truncate">
        <div>{patientName}</div>
        <div>{`ID - ${20001678}`}</div>
      </div>
    </ListGroup.Item>
  );
};

export default PatientInfoCard;
