import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Catagories from './Catagories/Catagories';

const Home = () => {
    const [catagories, setCatagories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/catagories')
        .then(res => res.json())
        .then(data => setCatagories(data));
    },[])
    return (
        <Container>
            <h1 className="pt-5 pb-3">I GROW BY HELPING PEOPLE IN NEED.</h1>
            <div className="input-group mb-3 w-50 mx-auto">
                <input type="text" className="form-control" placeholder="Search Catagory"/>
                <button className ="btn btn-primary" type ="button" id="button-addon2">Search</button>
            </div>
            <div className="d-flex flex-wrap justify-content-around my-5">
                {
                    catagories.map(catagory => <Catagories key={catagory._id} catagory={catagory}></Catagories>)
                }
            </div>
        </Container>
    );
};

export default Home;