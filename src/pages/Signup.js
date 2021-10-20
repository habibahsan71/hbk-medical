import React from "react";
import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import useAuth from "../hooks/useAuth.js";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const { AllContexts } = useAuth();

  const { getName, singUp, getEmail, getPassword, error } =
    AllContexts;

  return (
    <div className='row m-5'>
      <div className="col-md-4 text-center">
        <img className='w-75' src="./logo.png" alt="" />
      </div>
      <div className="text-center my-4 col-md-6">
        <h2>Please Sign Up</h2>
        <p className=" mt-2">Sign Up with Email & Password</p>
        <p className="text-danger text-center">{error}</p>
        <div className="w-75 mx-auto ">
          <Form onSubmit={singUp}>
            <Row>
              <Col className="text-start">
                <Form.Label htmlFor="name" visuallyHidden>
                  Your Name
                </Form.Label>
                <InputGroup className="mb-2">
                  <FormControl
                    required
                    onBlur={getName}
                    type="text"
                    autoComplete="current-name"
                    id="name"
                    placeholder="Enter your name"
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col className="text-start">
                <Form.Label htmlFor="email" visuallyHidden>
                  Your Email Address
                </Form.Label>
                <InputGroup className="mb-2">
                  <FormControl
                    required
                    onBlur={getEmail}
                    type="email"
                    autoComplete="current-email"
                    id="email"
                    placeholder="Enter your email address"
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col className="text-start">
                <Form.Label htmlFor="password" visuallyHidden>
                  Your Password
                </Form.Label>
                <InputGroup className="mb-2">
                  <FormControl
                    required
                    onBlur={getPassword}
                    type="password"
                    autoComplete="current-password"
                    id="password"
                    placeholder="Enter your password"
                  />
                </InputGroup>
              </Col>
            </Row>
            <button type="submit" className="btn btn-primary mt-2 w-100">
              Sign up
            </button>
          </Form>
        </div>
        <p className="mt-2">
          <NavLink className="text-decoration-none" to="/login">
            Already have an account? Please login!
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Signup;
