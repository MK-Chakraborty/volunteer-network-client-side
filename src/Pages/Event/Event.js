import React from 'react';
import { useEffect } from 'react';
import useAuth from '../../Hooks/useAuth';

const Event = () => {
    const { user } = useAuth();
    const email = user.email;

    // useEffect(() => {
    //     fetch('http://localhost:5000/registered/byMail', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify({email})
    //     })
    //     .then(res => res.json())
    //     .then(data => console.log(data));
    // }, [])

    return (
        <div>
            <h1>Events</h1>
        </div>
    );
};

export default Event;