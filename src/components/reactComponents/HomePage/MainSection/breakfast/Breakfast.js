import React from 'react';
import './Breakfast.css';
import { useSelector } from 'react-redux';

const Breakfast = () => {
    const breakfast = useSelector((state)=> state.meals.breakfastMenu)
    // console.log(breakfast)
    const renderMenu = breakfast.map((meal)=>{
        const {mealImageURL, mealName, price} = meal
        return(
            <div className='breakfast-meal'>
                <img className='breakfast-image' src={mealImageURL} alt="" />
                <h4 className='meal-name'>{mealName}</h4>
                <p className='price'>${price}</p>
            </div>
        )
    })

    
    return <>{renderMenu}</>
};

export default Breakfast;