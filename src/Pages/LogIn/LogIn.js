import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import logo from '../../images/logos/Group 1329.png'
import glglogo from '../../images/logos/2993685_brand_brands_google_logo_logos_icon.png'
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const LogIn = () => {
    const { signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redriect_uri = location.state?.from || '/home';


    const handleGoogleLogIn = () => {
        signInWithGoogle()
            .then((result) => {
                history.push(redriect_uri)
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    return (
        <Container>
            <img src={logo} className="w-25 mt-3 mb-5" alt="" />
            <Row>
                <Col xs={12} sm={12} md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
                    <div className="border border-3 rounded-3 p-5" style={{ backgroundColor: "ghostwhite" }}>
                        <h3 className="fs-3 fw-bold my-5">Login With</h3>
                        <Button variant="light" onClick={handleGoogleLogIn} className="border border-3 rounded-pill">
                            <Container>
                                <Row>
                                    <Col xs={4} sm={4} md={4} lg={2}>
                                        <img src={glglogo} className="w-100" alt="" />
                                    </Col>
                                    <Col xs={8} sm={8} md={8} lg={10}>
                                        <h6 className="fs-6 pt-1 text-center">Continue with Google</h6>
                                    </Col>
                                </Row>
                            </Container>
                        </Button>
                        <h6 className="pt-3 mb-5">Don't have an account? <Link to="/">Create an account.</Link></h6>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default LogIn;