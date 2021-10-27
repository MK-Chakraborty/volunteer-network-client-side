import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container,Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Catagories from './Catagories/Catagories';

const Home = () => {
    const [catagories, setCatagories] = useState([]);
    const {user, logOut} = useAuth();

    const handleLogOut = () => {
        logOut();
    }

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
            <div className="my-5 border-0 border-top border-3">
                <h3 className='text-capitalize pt-5 pb-3'>{user.email ? "Log Out and comeback with happiness !" : "Log In to start your journy towards sunshine!"}</h3>
                {
                    user.email && <h5 className="pb-2 text-primary">Hello, {user.displayName}</h5>
                }
                {
                    user.email ? <Button variant="outline-primary" onClick={handleLogOut} className="px-5 rounded-pill">Log Out</Button> : <NavLink to="/login"><Button variant="outline-primary" className="px-5 rounded-pill">Log In</Button></NavLink>
                }
            </div>
        </Container>
    );
};

export default Home;