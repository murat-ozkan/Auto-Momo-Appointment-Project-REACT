import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "./MechList.css";

const MechList = ({ mechs }) => {
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
            </Col>
          ))}
        </Row>
        <hr></hr>
      </Container>
    </>
  );
};

export default MechList;
