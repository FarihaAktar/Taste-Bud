import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Dinner = () => {
    const dinner = useSelector((state) => state.meals.dinnerMenu)
    // console.log(breakfast)
    const renderMenu = dinner.map((meal) => {
        const { mealImageURL, mealName, price, id } = meal
        return (
            <div className='breakfast-meal'>
                <Link to={`/meal/${id}`}>
                    <img className='breakfast-image' src={mealImageURL} alt="" />
                    <h4 className='meal-name'>{mealName}</h4>
                    <p className='price'>${price}</p>
                </Link>
            </div>
        )
    })


    return <>{renderMenu}</>
};

export default Dinner;