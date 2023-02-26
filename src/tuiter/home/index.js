import React from "react";
import homePostsArray from './home-posts.json';
import HomeComponentItem from "./home-post-item";
import "./index.css";

const HomeComponent = () => {
    return (
        <ul className="list-group">
            {
                homePostsArray.map(post =>
                    <HomeComponentItem
                        key={post._id} post={post} />)
            }
        </ul>
    );
};
export default HomeComponent;