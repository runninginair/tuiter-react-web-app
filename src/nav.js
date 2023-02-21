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
            <Link to="/hello">Hello</Link> |
            <Link to="/tuiter">Tuiter</Link>
        </div>
    )
}
export default Nav;