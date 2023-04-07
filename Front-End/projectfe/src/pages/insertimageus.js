import React, { useState } from "react";
import { Container, Row, Col, Button, Image, Form } from "react-bootstrap";
import { CloudUpload } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import image1 from "../components/imagesus/Mask1.png";
import image2 from "../components/imagesus/Mask2.png";
import image3 from "../components/imagesus/Mask3.png";
import image4 from "../components/imagesus/Mask4.png";
import image5 from "../components/imagesus/Mask5.png";

const texts = [
  'amitriptyline – also used for treatment of headaches and depression.',
  'duloxetine – also used for treatment of bladder problems and depression',
  'pregabalin and gabapentin – also used to treat epilepsy, headaches or anxiety',
  'Physical therapy.',
  'Do some Exercise and meet a doctor'
];

export const ImageUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [labelText, setLabelText] = useState("");
  const [randomImage, setRandomImage] = useState("");
  const imagesArray = [image1, image2, image3, image4, image5];
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  };
  const handleButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * imagesArray.length);
    setRandomImage(imagesArray[randomIndex]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle file upload logic
  };
 
 
  const [randomText, setRandomText] = useState('');

  const handleButtonClick2 = () => {
    const randomIndex = Math.floor(Math.random() * texts.length);
    setRandomText(texts[randomIndex]);
  }

  return (
    <>
      <Row>
        <Col>
          <div className="div-one">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Patient Name:</Form.Label>
                <Form.Control
                  className="text-box-one"
                  type="nme"
                  placeholder="Pleace Enter Patient Name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Patient ID:</Form.Label>
                <Form.Control
                  className="text-box-one"
                  type="id"
                  placeholder="Pleace Enter Patient ID"
                />
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Label>Choose an Ultrasound image file:</Form.Label>
                <Form.Control
                  type="file"
                  accept=".tif"
                  onChange={handleFileInputChange}
                />
              </Form.Group>
              <br />

              {preview && (
                <div>
                  <img src={preview} alt="Preview" style={{ width: "100%" }} />
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                disabled={!selectedFile}
                className="mt-3"
                 onClick={handleButtonClick}
              >
                <CloudUpload />
                Upload Image
              </Button>
            </Form>
          </div>
        </Col>
        <Col>
          <div className="div-03">
            <img
              className="img-fluid"
              src={randomImage}
              alt=""
              style={{ display: randomImage ? "block" : "none" }}
            />
          </div>
          <div className="imageLabel">
            <label>{labelText}</label>
          </div>

          
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Link to="/PatientProfilesDoctorView">
            <Button className="button-01" type="submit">
              View Patient Profiles
            </Button>
          </Link>
        </Col>
        <Col>
        <div className="doundiv">
        <Button className="treatmentsButton" onClick={handleButtonClick2} disabled={!selectedFile}>View Treatments</Button>
        <br/>
          <label className="treatmentLable" >Treatments :</label>
          <div className="div-02">
            <textarea className="treat" rows="6" cols="80" value={randomText}></textarea>
          </div>
          </div>
          <br />
        </Col>
      </Row>
    </>
  );
};
export default ImageUploadForm;
