import React from "react";
import { Row } from "react-bootstrap";
import AuthorCard from "../components/aboutUs/AuthorCard";
import dev1Image from "../images/devs/anujaya.jpg";
import dev2Image from "../images/devs/sandaru.jpg";
import dev3Image from "../images/devs/gimhan.jpg";
import dev4Image from "../images/devs/sashika.jpg";
import dev5Image from "../images/devs/sheron.jpg";

export const About = () => {
  return (
    <div style={{ padding: "28px", backgroundColor: "#000000" }}>
      <Row style={{ height: "100%", padding: "34px" }}>
        <h1
          style={{
            color: "#F5E86D",
          }}
        >
          PROJECT NerveSeg-US
        </h1>
        <Row
          style={{
            fontFamily: "Inria Serif",
            fontWeight: 700,
            lineHeight: "29px",
            fontSize: "24px",
            color: "#FFFFFF",
            marginTop: "25px",
            marginBottom: "78px",
          }}
        >
          <p>
            Post-surgery pain is an issue that many patients have to face. At
            present the pain after a surgery in adults is managed by using
            various drugs, which have their own set of side effects. By using
            ultrasound nerve segmentation, the source of the pain can be found
            and the pain can be treated at the source rather than with drugs
            which will only temporarily numb the pain.
          </p>
          <p>
            Accurate identification of nerve structures in ultrasound images can
            help in determining the source of the pain.This involves gathering
            images that contain nerves that do not show any signs of damage to
            compare them with nerves that show signs of abnormality, which could
            be indicative of pain. Images will have to be broken down into a
            matrix for analysis.
          </p>
        </Row>
        <Row style={{ gap: "70px", justifyContent: "center" }}>
          <AuthorCard
            avatar={dev1Image}
            description="My name is Anujaya,
              and I am a 2nd - year
              of a Software Engineering
              degree in Informatics
              Institute
              of Technology (IIT)
              offered by the University of
              Westminster."
          />
          <AuthorCard
            avatar={dev2Image}
            description="My name is Sandaru,
              and I am a 2nd - year
              of a Software Engineering
              degree in Informatics
              Institute
              of Technology (IIT)
              offered by the University of
              Westminster."
          />
          <AuthorCard
            avatar={dev3Image}
            description="My name is Gimhan,
              and I am a 2nd - year
              of a Software Engineering
              degree in Informatics
              Institute
              of Technology (IIT)
              offered by the University of
              Westminster."
          />
          <AuthorCard
            avatar={dev4Image}
            description="My name is Shashika,
              and I am a 2nd - year
              of a Software Engineering
              degree in Informatics
              Institute
              of Technology (IIT)
              offered by the University of
              Westminster."
          />
          <AuthorCard
            avatar={dev5Image}
            description="My name is Sheron,
              and I am a 2nd - year
              of a Software Engineering
              degree in Informatics
              Institute
              of Technology (IIT)
              offered by the University of
              Westminster."
          />
        </Row>
      </Row>
    </div>
  );
};
