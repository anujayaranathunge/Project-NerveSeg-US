import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const InfoEditor = ({ title, placeholder, exsistingContent }) => {
  const [content, setContent] = useState();

  useEffect(() => {
    if (exsistingContent) {
      setContent(exsistingContent);
    }
  }, [exsistingContent]);

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
          marginBottom: "15px",
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

const PatientInfoUpdater = () => {
  return (
    <Row
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: "#A4CBCD",
      }}
    >
      <Row style={{ flex: 1 }}>
        <Col style={{ display: "flex", flexDirection: "column" }}>
          <Row>
            <div
              style={{
                display: "flex",
                gap: "11px",
                alignItems: "center",
                height: "80px",
                borderRadius: "20px",
              }}
            >
              <Image
                roundedCircle
                style={{ height: "62px", width: "62px" }}
                src={"https://i.pravatar.cc/150?img=21"}
              />
              <div className="text-truncate">
                <div>{"hsadaosjkdjasjd"}</div>
                <div>{`ID - ${`sadsalkdjoaisjdjaspoj`}`}</div>
              </div>
            </div>
          </Row>
          <Row style={{ flex: 1 }}>
            <InfoEditor title="Treatments" placeholder="Add Treatment" />
          </Row>
        </Col>
        <Col>
          <Row>
            <Col md={6}>
              <InfoEditor />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <InfoEditor />
            </Col>
          </Row>
        </Col>
      </Row>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "20px",
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

export default PatientInfoUpdater;
