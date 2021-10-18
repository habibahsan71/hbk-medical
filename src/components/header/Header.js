import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";
import "./Header.css"

const Header = () => {
    const { AllContexts } = useAuth();
    const { user, logOut } = AllContexts;
    const { displayName, photoURL, email } = user;
    return (
        <div>
            <Navbar className="nav-bar" bg="dark" variant="dark" expand="lg" >
                <Container>
                    <Navbar.Brand as={NavLink} className="text-white d-flex align-items-center" to="/home">
                        <img className="logo" src="./logo.png" alt="" />
                        <h3 className="title">HBK Medical Services</h3>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link as={NavLink} to="/home" className="text-white">
                                Home
                            </Nav.Link>

                            <Nav.Link as={NavLink} to="/about" className="text-white">
                                About
                            </Nav.Link>

                            <Nav.Link as={NavLink} to="/contact" className="text-white">
                                Contact
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/services" className="text-white">
                                Services
                            </Nav.Link>


                            {!displayName ? (
                                <>
                                    <Nav.Link as={NavLink} to="/signup" className="text-white">
                                        Sign Up
                                    </Nav.Link>

                                    <Nav.Link className="text-white" as={NavLink} to="/login">
                                        Log in
                                    </Nav.Link>
                                </>
                            ) : (
                                <NavDropdown
                                    title={
                                        <img
                                            style={{
                                                width: "45px",
                                                borderRadius: "50%",
                                            }}
                                            src={photoURL}
                                            alt=""
                                        />
                                    }
                                >
                                    <div className="text-center">
                                        <h6>{displayName}</h6>
                                        <p className="m-0 mb-2">{email}</p>
                                        <button onClick={logOut} className="btn btn-primary">
                                            Sign Out
                                        </button>
                                    </div>
                                </NavDropdown>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
