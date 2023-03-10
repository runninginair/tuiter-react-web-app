import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
// import itemArray from './items.json';
// import NavigationSidebarListItem from './navigation-sidebar-list-item';

const NavigationSidebar = (
    {
        // active = 'explore'
    }
) => {

    const { pathname } = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    /**     3.1.4 Use className instead of class
     * 
     * The HTML class attribute is commonly used to associate CSS transformation rules to an HTML element.
     * In JavaScript class is a keyword so we can't use it. Instead we use className which will be
     * transpiled into class in the resulting DOM. Replace all class attributes with className.
     */
    return (
        <div className="list-group">
            <a className="list-group-item">
                <i className="bi bi-twitter"></i>&nbsp; Tuiter
            </a>
            <Link to="home" className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                <i className="bi bi-house-heart-fill"></i>&nbsp; Home
            </Link>
            <Link to="explore" className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                <i className="bi bi-hash"></i>&nbsp; Explore
            </Link>
            <Link to="/" className={`list-group-item ${active === 'notifications' ? 'active' : ''}`}>
                <i className="bi bi-bell"></i>&nbsp; Notifications
            </Link>
            <Link to="/" className={`list-group-item ${active === 'messages' ? 'active' : ''}`}>
                <i className="bi bi-envelope"></i>&nbsp; Messages
            </Link>
            <Link to="/" className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`}>
                <i className="bi bi-bookmarks"></i>&nbsp; Bookmarks
            </Link>
            <Link to="lists" className={`list-group-item ${active === 'lists' ? 'active' : ''}`}>
                <i className="bi bi-list-check"></i>&nbsp; Lists
            </Link>
            <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile' ? 'active' : ''}`}>
                <i className="bi bi-person-lines-fill"></i>&nbsp; Profile
            </Link>
            <Link to="/" className={`list-group-item ${active === 'more' ? 'active' : ''}`}>
                <i className="bi bi-three-dots"></i>&nbsp; More
            </Link>
        </div>
    );
};
export default NavigationSidebar;

/**

 */

/**

            {
                itemArray.map(item =>
                    <NavigationSidebarListItem
                        key={item._id}
                        item={item}/>
                )
            }

 */