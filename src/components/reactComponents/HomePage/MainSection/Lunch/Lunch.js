import React from 'react';
import { useSelector } from 'react-redux';

const Lunch = () => {
    const lunch = useSelector((state)=> state.meals.lunchMenu)
    // console.log(breakfast)
    const renderMenu = lunch.map((meal)=>{
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

export default Lunch;