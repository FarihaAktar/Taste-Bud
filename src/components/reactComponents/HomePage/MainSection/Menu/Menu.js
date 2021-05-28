import React from 'react';
import './Menu.css';
import fakeData from '../../../../../FakeData/MOCK_DATA.json'


const Menu = () => {
    console.log(fakeData)

    return (
        <div>
            <ul>
                <li>
                    <button onClick=''>Breakfast</button>
                </li>
                <li>
                    <button>Lunch</button>
                </li>
                <li>
                    <button>Dinner</button>
                </li>
            </ul>
            <div>

            </div>
        </div>
    );
};

export default Menu;