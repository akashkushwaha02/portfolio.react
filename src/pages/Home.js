import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="Home">
            <header className="hero">
                <h1 className="hero-text"> 
                    Hi, i am <span>Akash</span>
                </h1>
                <p className="h-sub-text">
                    lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsum lorem ipsum
                </p>
                <div className="icons">
                    <Link to='/' className="icon-holder"> 
                        <p className="icon change"> Social</p>
                    </Link>
                    <Link to='/' className="icon-holder"> 
                        <p className="icon"> Media</p>
                    </Link>
                    <Link to='/' className="icon-holder"> 
                        <p className="icon"> icon</p>
                    </Link>
                </div>
            </header>            
        </div>
    )
}

export default Home;