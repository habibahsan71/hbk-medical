import React from "react";
import { Card, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './Service.css';


const Service = ({ service }) => {
  const { key, img, title, desc, price } = service;


  return (
    <Col sm={12} md={6} lg={4}>

      <div className="m-2">
        <Card className="mx-auto" style={{ width: "21rem", height: "32rem" }}>
          <div className="inner">
            <Card.Img variant="top" className="img-fluid" src={img} />
          </div>
          <Card.Body className="my-1 py-1">
            <Card.Title>{title}</Card.Title>
            <Card.Text>{desc}</Card.Text>
          </Card.Body>
          <Card.Body className="my-1 py-1">
            <h4>Price: {price}$</h4>
          </Card.Body>

          <Card.Body>
            <NavLink to={`/services/${key}`} className="btn btn-primary w-50 mx-auto">
              View Details
            </NavLink>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

export default Service;
