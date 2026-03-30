import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="nav-content">
                    <Link to="/" className="logo">
                        <div className="logo-circle">
                            <i className="fas fa-heart"></i>
                        </div>
                        <span className="logo-text">Yukti — युक्ति</span>
                    </Link>
                    <div className="nav-menu">
                        <a href="/#about" className="nav-link">About</a>
                        <a href="/#features" className="nav-link">Features</a>
                        <a href="/#how-it-works" className="nav-link">How It Works</a>
                        <Link to="/donate" className="nav-link">Donate Food</Link>
                        <Link to="/request-food" className="nav-link">Request Food</Link>
                        <Link to="/receive" className="nav-link">Find Food</Link>
                        <a href="/#contact" className="nav-link">Contact</a>
                        <Link to="/auth" className="profile-icon">
                            <i className="fas fa-user-circle"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
