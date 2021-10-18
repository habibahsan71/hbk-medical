import React from "react";
import { Container, Row, Carousel } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth.js";
import Service from "../components/course/Service.js";

const Home = () => {
  const { services } = useAuth();
  console.log(services);
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./12.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className='text-dark'>Best Surgeons</h3>
            <p className='text-dark fw-bold'>Best Board with world best surgeons to decide every important decision</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./14.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className='text-dark'>Best Cardiologist</h3>
            <p className='text-dark fw-bold'>We Have the best Cardiologist from America. and we provide best treatment</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./11.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className='text-dark'>Best Facilities</h3>
            <p className='text-dark fw-bold'>We Have the best facilities for a patient. and environment matter for patients</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div id="feature"
        className="py-5">
        <div className="text-center">

          <h1 >Our Services</h1>
          <p className="mb-0">
            We Provide Best Services around The country with best Success rate
          </p>

        </div>

        <Container>
          <div className="my-3 d-flex flex-wrap justify-content-between">
            <Row>
              {services.slice(0, 6)?.map((service) => (
                <Service key={service.key} service={service} />
              ))}
            </Row>
          </div>
        </Container>
        <div>
          <Container >
            <div style={{ height: "30vh" }} className="d-flex justify-content-center align-items-center">
              <div className="text-center my-5 py-5">
                <NavLink to="/courses" className="rounded-pill btn btn-primary fs-5 py-2 px-4">
                  View All Services
                </NavLink>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Home;
