import React, {useState} from "react";
import { Container, Row, Col, Button,Image, Link, Form } from 'react-bootstrap';
import { CloudUpload } from 'react-bootstrap-icons';

export const ImageUploadForm = () =>{
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle file upload logic
  };

    return(
<>
    <Row>
        <Col>
        <div className="div-one">
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Patient Name:</Form.Label>
        <Form.Control className="text-box-one" type="nme" placeholder="Pleace Enter Patient Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Patient ID:</Form.Label>
        <Form.Control className="text-box-one" type="id" placeholder="Pleace Enter Patient ID" />
      </Form.Group>
      <br/>
      <Form.Group>
        <Form.Label>Choose an Ultrasound image file:</Form.Label>
        <Form.Control type="file" onChange={handleFileInputChange} />
      </Form.Group>
      <br/>
      {preview && (
        <div>
          <img src={preview} alt="Preview" style={{ width: '100%' }} />
        </div>
      )}
      <Button
        type="submit"
        variant="primary"
        disabled={!selectedFile}
        className="mt-3"
      >
        <CloudUpload />
        Upload Image
      </Button>
    </Form>
    </div>
    </Col>
    <Col>
    <div className="div-03">
    {preview && (
        <div >
          <img src={preview} alt="Preview" style={{ width: '100%' }} />
        </div>
      )}
    </div>
    </Col>
    </Row><br/>
    <Row>
        <Col>
        <div className="div-02">
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="textTretmat">Treatment</Form.Label>
            <Form.Control className="text-area" as="textarea" rows={3} />
            </Form.Group>
            </Form>
        </div>
        </Col>
        <Col>
        <div>
        <Button className="button-01" type="submit">
        View Patient Profiles
      </Button>
        </div>
        </Col>
    </Row>
 </>
    )
}
export default ImageUploadForm;