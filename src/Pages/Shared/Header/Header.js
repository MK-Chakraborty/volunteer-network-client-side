import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logos/Group 1329.png';
import './Header.css'

const Header = () => {
    return (
        <Container fluid>
            <Navbar expand="lg">
                <Container className="pt-3">
                    <Navbar.Brand className="text-start d-none d-md-block">
                        <Link to="/home">
                            <img src={logo} className='w-25' alt="" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Brand className="text-start d-md-none" style={{ width: "75%" }}>
                        <Link to="/home">
                            <img src={logo} className='w-50' alt="" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto menubar">
                            <NavLink to="/home" className="text-decoration-none"><h6 className="fs-6 fw-bold text-secondary px-3 py-2">Home</h6></NavLink>
                            <NavLink to="/link" className="text-decoration-none"><h6 className="fs-6 fw-bold text-secondary px-3 py-2">Donation</h6></NavLink>
                            <NavLink to="/link" className="text-decoration-none"><h6 className="fs-6 fw-bold text-secondary px-3 py-2">Events</h6></NavLink>
                            <NavLink to="/link" className="text-decoration-none"><h6 className="fs-6 fw-bold text-secondary px-3 py-2">Blog</h6></NavLink>
                            <NavLink to="/register"><Button className="mx-3 mb-3">Register</Button></NavLink>
                            <NavLink to="/link"><Button variant="secondary">Admin</Button></NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;