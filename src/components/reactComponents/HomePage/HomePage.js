import React from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Menu from './MenuSection/Menu/Menu'

const HomePage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Menu></Menu>
        </div>
    );
};

export default HomePage;