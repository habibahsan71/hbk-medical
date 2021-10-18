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
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./12.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./12.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>



      <div>
        <Container >
          <div style={{ height: "90vh" }} className="d-flex justify-content-center align-items-center">
            <div className="text-center my-5 py-5">
              <h1 className="text-primary">Learn to be creative</h1>

              <p className="my-4 text-white fs-5">
                Learn exciting technologies from web development, design, game
                development and more!
              </p>
              <NavLink
                to="/courses"
                className="rounded-pill btn btn-primary fs-5 py-2 px-4"
              >
                View Courses
              </NavLink>
            </div>
          </div>
        </Container>
      </div>

      <div id="feature"
        className="py-5">
        <div className="text-center">

          <h1>Our Services</h1>
          <p className="mb-0">
            We Provide Best Services around The country with best Success rate
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
    </div>
  );
};

export default Home;
