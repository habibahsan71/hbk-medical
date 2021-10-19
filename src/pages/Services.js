import React from "react";
import { Container, Row } from "react-bootstrap";
import useAuth from "../hooks/useAuth.js";
import Service from "../components/course/Service";

const Services = () => {
  const { services } = useAuth();

  return (
    <div className="py-5 mt-5">
      <div className="text-center text-dark">

        <h1> Our Provided <span className='text-primary'>Medical</span> Services</h1>

        <p className="mb-0">
          We offer top and succesful medical support with 99% success rate.
        </p>
      </div>

      <Container>
        <div className="my-3 d-flex flex-wrap justify-content-between">
          <Row>
            {services.map((service) => (
              <Service key={service.key} service={service} />
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Services;
