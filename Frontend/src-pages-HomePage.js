import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="homepage">
            <h1>Welcome to Pet Donation & Care</h1>
            <p>Find pets to adopt or donate to our care network.</p>
            <div>
                <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
            </div>
            <div>
                <Link to="/pets">View Pets</Link>
            </div>
        </div>
    );
}

export default HomePage;
