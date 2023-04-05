import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useLocation } from "react-router-dom";

const InfoEditor = ({ title, placeholder, exsistingContent }) => {
  const [content, setContent] = useState();

  useEffect(() => {
    if (exsistingContent) {
      setContent(exsistingContent);
    }
  }, [exsistingContent]);

  const lacation = useLocation();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "25px",
        backgroundColor: "#0B676C",
        borderRadius: "18px",
      }}
    >
      <span
        style={{
          display: "block",
          fontStyle: "normal",
          fontWeight: 800,
          // fontSize: "28px",
          lineHeight: "34px",
          color: "#FFFFFF",
        }}
      >
        {title}
      </span>
      <textarea
        style={{
          padding: "15px",
          width: "100%",
          flex: 1,
          fontWeight: 800,
          // fontSize: "28px",
          lineHeight: "34px",
          color: "#FFFFFF",
          backgroundColor: "#0B676C",
          border: "none",
          resize: "none",
          outline: "none",
          borderRadius: "18px",
        }}
        placeholder={placeholder}
        value={content}
      />
    </div>
  );
};

const PatientInfo = () => {
  return (
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
                <div>{"dhamith karunarathna"}</div>
                <div>{`ID - ${`20001678`}`}</div>
              </div>
            </div>
          </Row>
          <Row style={{ flex: 1 }}>
            <InfoEditor title="Treatments" placeholder="Add Treatment" />
          </Row>
        </Col>
        <Col style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Row style={{ height: "50%" }}>
            <InfoEditor
              title="Doctor Updates"
              placeholder="Add Doctor Updates"
            />
          </Row>
          <Row style={{ height: "50%" }}>
            <InfoEditor
              title="Patient Progress"
              placeholder="Patient Progress"
            />
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
        <Button
          variant="primary"
          style={{
            borderRadius: "20px",
            fontWeight: 800,
            // fontSize: "36px",
            lineHeight: "44px",
          }}
        >
          Save All
        </Button>
      </div>
    </Row>
  );
};

export default PatientInfo;
