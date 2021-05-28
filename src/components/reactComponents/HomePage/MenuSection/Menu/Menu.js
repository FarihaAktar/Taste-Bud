import React from 'react';
import './Menu.css';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Menu = () => {
    const [value, setValue] = React.useState(2);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <Paper square>
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                >
                    <Tab label="Active" />
                    <Tab label="Active"  />
                    <Tab label="Active" />
                </Tabs>
               
            </Paper>
        </div>
    );
};

export default Menu;