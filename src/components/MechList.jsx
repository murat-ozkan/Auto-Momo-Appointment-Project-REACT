import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

const MechList = ({ mechs }) => {
  return (
    <>
      {" "}
      <Container>
        <h3 style={{ color: "gray" }}>Our Mechanics</h3>
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
              <h2>{mech.name}</h2>
              <h4 style={{ color: "red", fontStyle: "italic" }}>
                {mech.brand}
              </h4>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default MechList;
