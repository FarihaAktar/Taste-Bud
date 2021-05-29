import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
// import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
// import { UserContext } from '../../../App';

const Sidebar = () => {
    const [isAdmin, setIsAdmin] = React.useState(false)

    // React.useEffect(() => {
    //     fetch('https://enigmatic-journey-08819.herokuapp.com/isAdmin', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify({ email: loggedInUser.email })
    //     })
    //         .then(res => res.json())
    //         .then(res => setIsAdmin(res))
    // }, [])
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <div>

                    <li>
                        <Link to="/addService" className="text-white">
                            <i class="fas fa-user-plus me-3 " /> <span>Add Service</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/manageService" className="text-white">
                            <i class="fas fa-tasks me-3 " /> <span>Manage Services</span>
                        </Link>
                    </li>
                </div>

                <li>
                    <Link to="/" className="text-white">
                        😋 <span>Back To Home</span>
                    </Link>
                </li>


            </ul>

        </div>
    );
};

export default Sidebar;