import React from "react";
import useAuth from "./../hooks/useAuth.js";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const Details = () => {
  const { key } = useParams();
  const { services } = useAuth();
  const medServices = services.find((service) => service.key === Number(key));
  return (
    <div className="my-4">
      {medServices?.title ? (
        <Container>
          <Row className="d-flex justify-content-center">
            <Col md={6}>
              <img className="img-fluid" src={medServices.img} alt="" />
            </Col>
            <Col md={6} className="d-flex justify-content-center flex-column">
              <h2>{medServices.title}</h2>
              <h5>{medServices.desc}</h5>
              <Row>
                <Col>
                  <h1>Price:{medServices.price}$</h1>

                </Col>

              </Row>
            </Col>
          </Row>
        </Container>
      ) : (
        <div className="my-5 py-1">
          <h1 className="my-5 p-5 text-center">NO Services Found</h1>
        </div>
      )}
    </div>
  );
};

export default Details;
