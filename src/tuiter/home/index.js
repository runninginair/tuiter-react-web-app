import React from "react";
// import homePostsArray from './home-posts.json';
// import HomeComponentItem from "./home-post-item";
// import "./index.css";

// const HomeComponent = () => {
//     return (
//         <ul className="list-group">
//             {
//                 homePostsArray.map(post =>
//                     <HomeComponentItem
//                         key={post._id} post={post} />)
//             }
//         </ul>
//     );
// };

// import TuitsList from "../tuits/tuits-list";
import TuitsList from "../tuits";

import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return (
        <>
            <h4>Home</h4>
            <WhatsHappening />
            <TuitsList />
        </>
    );
};

export default HomeComponent;