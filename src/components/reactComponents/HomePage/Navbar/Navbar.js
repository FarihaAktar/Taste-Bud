import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <h1 className='logo'>TesteBUD</h1>
            <ul className='nav-link'>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;