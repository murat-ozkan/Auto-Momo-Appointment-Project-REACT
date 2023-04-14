import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

const MechList = ({ mechs }) => {
  return (
    <>
      {" "}
      <Container>
        <h3>Our Mechanics</h3>
        <Row>
          {mechs.map((mech) => (
            <Col key={mech.id}>
              <h2>{mech.name}</h2>
              <h4>{mech.brand}</h4>
              <img src={mech.img} alt={mech.name} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default MechList;
