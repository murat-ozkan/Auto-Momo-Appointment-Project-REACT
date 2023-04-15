import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "./MechList.css";
import AddModal from "./AddModal";

const MechList = ({ mechs }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleClick = () => {
    setShow(true);
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
                  width: "250px",
                  height: "350px",
                  borderRadius: "10px",
                  margin: "1rem",
                  marginBottom: "1rem",
                }}
                className="photo"
                src={mech.img}
                alt={mech.name}
              />
              <h4>{mech.name}</h4>
              <h4 style={{ color: "brown", fontStyle: "italic" }}>
                {mech.brand}
              </h4>
              <Button style={{ marginBottom: "1rem" }} onClick={handleClick}>
                Book a Service
              </Button>
            </Col>
          ))}
        </Row>
        <hr></hr>
      </Container>
      <AddModal show={show} handleClose={handleClose} />
    </>
  );
};

export default MechList;
