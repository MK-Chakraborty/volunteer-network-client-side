import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../images/logos/Group 1329.png'
import { useForm } from "react-hook-form";
import './Register.css'
import useAuth from '../../Hooks/useAuth';
import { useParams } from 'react-router';

const Register = () => {
    const { catagory } = useParams();
    const { user } = useAuth();
    // get current date
    let today = new Date().toLocaleDateString()

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:5000/registered', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result));
    };
    return (
        <Container>
            <img src={logo} className="w-25 mt-3 mb-5" alt="" />
            <Row>
                <Col xs={12} sm={12} md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
                    <div className="border border-3 rounded-3 px-5 pb-5 registerForm" style={{ backgroundColor: "ghostwhite" }}>
                        <h3 className="fs-3 fw-bold my-3 text-start">Register as a Volunteer</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
                            <input {...register("fullName", { required: true, maxLength: 100 })} value={user.displayName} placeholder="Full Name" className="border-0 border-bottom border-3 fs-6 fw-bold" />
                            <input type="email" {...register("email", { required: true })} value={user.email} placeholder="Email" className="border-0 border-bottom border-3 fs-6 fw-bold" />
                            <input type="text" {...register("date", { min: 18, max: 99 })} value={today} placeholder="Date" className="border-0 border-bottom border-3 fs-6 fw-bold" />
                            <input {...register("description", { maxLength: 300 })} placeholder="Your Motive" className="border-0 border-bottom border-3 fs-6 fw-bold" />
                            <input {...register("catagory", { maxLength: 300 })} value={catagory} placeholder="Catagory" className="border-0 border-bottom border-3 fs-6 fw-bold" />
                            <input type="submit" className="bg-primary text-white fs-5 fw-bold rounded" />
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;