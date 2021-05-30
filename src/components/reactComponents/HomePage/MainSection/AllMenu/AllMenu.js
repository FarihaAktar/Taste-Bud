import React from 'react';
import { Link } from 'react-router-dom';
import './AllMenu.css'

const AllMenu = (props) => {
    const { mealImageURL, mealName, price, id } = props.meal
    return (

        <div className='all-meal'>
            <Link to={`/meal/${id}`}>
                <div className='all-meal-img-box'>
                    <img className='all-meal-img' src={mealImageURL} alt="" />
                </div>
                <h3>{mealName}</h3>
                <p>{price}</p>
            </Link>
        </div>

    );
};

export default AllMenu;