import React from "react";
import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import useAuth from "../hooks/useAuth.js";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import googleLogo from "../assets/download.png";

const Login = () => {
  const { AllContexts } = useAuth();
  const history = useHistory();

  const location = useLocation();
  const redirect = location?.state?.from || "/home";

  const {
    getEmail,
    getPassword,
    signInWithEmail,
    error,
    setUser,
    setError,
    signInWithGoogle
  } = AllContexts;

  return (

    <div className="m-5">
      <div className=" row ">
        <div className="col-md-4 text-center">
          <img className="w-75" src="./logo.png" alt="" />
        </div>
        <div className="text-center my-4 col-md-6">
          <h2>Please Login</h2>
          <p className=" mt-2">Login with Email & Password</p>
          <p className="text-danger text-center">{error}</p>
          <div className="w-75 mx-auto">
            <Form
              onSubmit={(e) => {
                e.preventDefault()
                signInWithEmail()
                  .then((result) => {
                    setUser(result.user);
                    history.push(redirect);
                  })
                  .catch((err) => {
                    setError(err.message);
                  });
              }} s
            >
              <Row>
                <Col className="text-start">
                  <Form.Label htmlFor="email" visuallyHidden>
                    Your Email Address
                  </Form.Label>
                  <InputGroup className="mb-2">
                    <FormControl
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
                Login
              </button>
            </Form>
          </div>
          <p className="mt-2">
            <NavLink className="text-decoration-none" to="/signup">
              Need an Account? Please Sign up!
            </NavLink>
            <br />
            <NavLink className="text-decoration-none" to="/reset">
              Forget password? Reset!
            </NavLink>
          </p>
          <p className="mt-3">Or</p>
          <p> Login with</p>
          <div>
            <button
              onClick={() => {
                signInWithGoogle()
                  .then((result) => {
                    setUser(result.user);
                    history.push(redirect);
                  })
                  .catch((err) => {
                    setError(err.message);
                  });
              }}
              className="btn"
            ><img className="w-50" src={googleLogo} alt="" />
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
