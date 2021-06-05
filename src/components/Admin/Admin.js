import { Link } from '@material-ui/core';
import React from 'react';
import Sidebar from './Sidebar/Sidebar';

const Admin = () => {
    return (
        <section className="container-fluid row">
            <Sidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h3>Only admin can access this page</h3>

            </div>
        </section>
    );
};

export default Admin;