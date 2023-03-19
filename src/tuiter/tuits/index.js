import React from "react";
// import PostSummaryItem2 from "./post-summary-item";
import { useSelector } from "react-redux";
import TuitItem from "./tuits-item";
// import TuitStats from "./tuits-stats"

const TuitsList = () => {
    const postsArray = useSelector(
        state => state.tuits
    );

    return (
        <ul className="list-group">
            {
                postsArray.map(tuit =>
                    <TuitItem
                        key={tuit._id}
                        tuit={tuit}
                    />
                )
            }
        </ul>
    );
};

export default TuitsList;
