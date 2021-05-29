import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { setMeal } from '../../Redux/Actions/MealActions';
import fakeData from '../../../FakeData/MOCK_DATA.json'

const MealDetail = () => {
    const { mealId } = useParams();
    const dispatch = useDispatch();
    const meals = useSelector((state) => {
        return state.meals.setMenu
    })
    const id = parseInt(mealId)
    const filterMeal = meals.filter(meal => meal.id === id)
    useEffect(()=> dispatch(setMeal(fakeData)), [dispatch]);
    console.log(filterMeal[0])
    const {mealImageURL, mealName, price, detail} = filterMeal[0]
    return (
        <div>
            
        </div>
    );
};

export default MealDetail;