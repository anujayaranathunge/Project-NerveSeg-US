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
        <Image
          roundedCircle
          style={{ height: "62px", width: "62px" }}
          src={"https://i.pravatar.cc/150?img=21"}
        />
        <div className="text-truncate">
          <div>{patientName}</div>
          <div>{`ID - ${patientName}`}</div>
        </div>
    </ListGroup.Item>
  );
};

export default PatientInfoCard;
