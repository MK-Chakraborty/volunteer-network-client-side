import React from 'react';
import { Card } from 'react-bootstrap';

const Catagories = ({ catagory }) => {
    const btnColor = catagory.btnClr;
    return (
        <Card style={{ width: '18rem', borderRadius:"12px" , backgroundColor:btnColor }} className="my-3">
            <Card.Img variant="top" src={catagory.img} style={{borderRadius:"12px"}} />
            <Card.Body style={{backgroundColor:btnColor, borderRadius:"12px"}}>
                <Card.Title className="text-white">{catagory.title}</Card.Title>
            </Card.Body>
        </Card>
    );
};

export default Catagories;