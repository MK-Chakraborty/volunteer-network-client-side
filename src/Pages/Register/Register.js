import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import logo from '../../images/logos/Group 1329.png'


const Register = () => {
    return (
        <Container>
            <img src={logo} className="w-25 mt-3 mb-5" alt="" />
            <Row>
                <Col xs={12} sm={12} md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
                    <div className="border border-3 rounded-3 px-5 pb-5" style={{ backgroundColor: "ghostwhite" }}>
                        <h3 className="fs-3 fw-bold my-3 text-start">Register as a Volunteer</h3>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;