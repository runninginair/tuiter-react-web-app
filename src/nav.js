/** 2.9 Implementing a Navigation component
 * The navigation links in the three components, Labs, HelloWorld, and Tuiter,
 * would be best implemented as a reusable component as shown below.
 */

import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div>
            <Link to="/">Labs</Link> |
            <Link to="/">Assignment 6</Link> |
            <Link to="/a7">Assignment 7</Link> |
            <Link to="/tuiter">Tuiter</Link>
        </div>
    );
}

export default Nav;