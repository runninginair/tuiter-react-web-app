import React from "react";
// import PostSummaryItem2 from "./post-summary-item";
import { useSelector } from "react-redux";
import TuitItem_a7 from "./tuits-item";
import TuitStats from "./tuits-stats"

const TuitsList_a7 = () => {
    const postsArray = useSelector(
        state => state.tuits
    );

    return (
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <TuitItem_a7
                        key={post._id}
                        post={post} 
                    />
                )
            }
        </ul>
    );
};

export default TuitsList_a7;