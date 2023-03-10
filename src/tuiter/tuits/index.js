import React from "react";
import TuitListItem from "./tuits-list-item";
import TuitStats from "./tuits-stats";
import { useSelector } from "react-redux";

const TuitsList = () => {
    const tuitArray = useSelector(       // retrieve state from the store
        (state) => state.tuits
    )

    return (
        
        <ul className="list-group">
            {
                tuitArray.map(tuits =>
                    <TuitListItem
                        key={tuits._id}
                        tuits={tuits} />
                )
            }
        </ul>
    );
};

export default TuitsList;