import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "./MechList.css";
import AddModal from "./AddModal";

const MechList = ({ mechs }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //! buradayaım
  const handleClick = () => {
    handleShow();
  };
  return (
    <>
      <Container>
        <h2 style={{ color: "gray" }}>Our Mechanics</h2>
        <hr></hr>
        <Row>
          {mechs.map((mech) => (
            <Col key={mech.id}>
              <img
                style={{
                  width: "200px",
                  height: "300px",
                  borderRadius: "10px",
                  margin: "2rem",
                  marginBottom: "1rem",
                }}
                className="photo"
                src={mech.img}
                alt={mech.name}
              />
              <h3>{mech.name}</h3>
              <h4 style={{ color: "brown", fontStyle: "italic" }}>
                {mech.brand}
              </h4>
              <Button onClick={handleClick}>Book a Service</Button>
            </Col>
          ))}
        </Row>
        <hr></hr>
      </Container>
      <AddModal show={show} handleClose={handleClose} handleShow={handleShow} />
    </>
  );
};

export default MechList;
