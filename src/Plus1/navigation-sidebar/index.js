import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
// import itemArray from './items.json';
// import NavigationSidebarListItem from './navigation-sidebar-list-item';

const NavigationSidebar = () => {

    const { pathname } = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];


    return (
        <div className="list-group">
            <a className="list-group-item">
                <h2 className="text-primary fw-bolder"> + 1 </h2>
                <h4>PlusOne Workout</h4>
                <span className="d-none d-xl-inline-block d-xxl-inline-block"> </span>
            </a>
            <Link to="home" className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                <i className="bi bi-house-heart-fill"></i> &nbsp;
                <span className="d-none d-xl-inline-block d-xxl-inline-block"> Home </span>
            </Link>

            <Link to="lists" className={`list-group-item ${active === 'lists' ? 'active' : ''}`}>
                <i className="bi bi-list-check"></i> &nbsp;
                <span className="d-none d-xl-inline-block d-xxl-inline-block"> Lists </span>
            </Link>

            <Link to="profile" className={`list-group-item 
                ${(active === ('profile' || 'edit-profile'))? 'active' : ''}`}>
                <i className="bi bi-person-lines-fill"></i> &nbsp;
                <span className="d-none d-xl-inline-block d-xxl-inline-block"> Profile </span>
            </Link>

            <Link to="/" className={`list-group-item ${active === 'more' ? 'active' : ''}`}>
                <i className="bi bi-three-dots"></i> &nbsp;
                <span className="d-none d-xl-inline-block d-xxl-inline-block"> More </span>
            </Link>
        </div>
    );
};

export default NavigationSidebar;