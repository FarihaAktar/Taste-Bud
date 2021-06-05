import React, { useEffect, useState } from 'react';
import './Menu.css';
import fakeData from '../../../../../FakeData/MOCK_DATA.json';
import Breakfast from '../Breakfast/Breakfast';
import Lunch from '../Lunch/Lunch';
import Dinner from '../Dinner/Dinner'
import { setMeal, setBreakfastMenu, setLunchMenu, setDinnerMenu, removeMenu } from '../../../../Redux/Actions/MealActions'
import { useDispatch, useSelector } from 'react-redux';
import AllMenu from '../AllMenu/AllMenu';


const Menu = () => {
    const dispatch = useDispatch()
    const meals = useSelector((state) => {
        return state.meals.setMenu
    })
    useEffect(() => dispatch(setMeal(fakeData)), [dispatch])
    // const [menu, setMenu] = useState([])
    // const [breakfastData, setBreakfastData] = useState([])
    // const [lunchData, setLunchData] = useState([])
    // const [dinnerData, setDinnerData] = useState([])


    const handleMeal = (food) => {
        // console.log(fakeData)
        // dispatch(setMeal(fakeData))
        if (food === "Breakfast") {
            // let dayMeal = [...breakfastData]
            // let dayMeal = [...menu]
            let dayMeal = fakeData.filter(meal => meal.meal === food);
            // setMenu(dayMeal);
            // setBreakfastData(dayMeal)
            dispatch(removeMenu(dayMeal[0]))
            dispatch(setBreakfastMenu(dayMeal));
            // setLunchData([]);
            // setDinnerData([])
            // console.log(breakfastData)
        }
        if (food === "Lunch") {
            // let lunchMeal = [...lunchData]
            // let lunchMeal = [...menu]
            let lunchMeal = fakeData.filter(meal => meal.meal === food);
            // setLunchData(lunchMeal);
            // setMenu(lunchMeal);
            dispatch(removeMenu(lunchMeal[0]))
            dispatch(setLunchMenu(lunchMeal));
            // setBreakfastData([]);
            // setDinnerData([]);
            // console.log(lunchData)
        }
        if (food === "Dinner") {
            // let dinnerMeal = [...dinnerData]
            // let dinnerMeal = [...menu]
            let dinnerMeal = fakeData.filter(meal => meal.meal === food);
            // setDinnerData(dinnerMeal);
            // setMenu(dinnerMeal);
            dispatch(removeMenu(dinnerMeal[0]));
            dispatch(setDinnerMenu(dinnerMeal));
            // setBreakfastData([]);
            // setLunchData([])
            // console.log(dinnerData)
        }

    }
    return (
        <div className='main-section'>
            <h1 className='order-text'>Click Here To Order Your Meal</h1>
            <div className='menu-btn-section'>
                <button className='menu-btn' onClick={() => handleMeal("Breakfast")}>Breakfast</button>
                <button className='menu-btn' onClick={() => handleMeal("Lunch")}>Lunch</button>
                <button className='menu-btn' onClick={() => handleMeal("Dinner")}>Dinner</button>
            </div>
            <div className='menu'>
                {
                    meals.map(meal => <AllMenu key={meal.id} meal={meal}></AllMenu>)
                }
                <Breakfast></Breakfast>
                <Lunch></Lunch>
                <Dinner></Dinner>

            </div>
        </div>
    );
};

export default Menu;