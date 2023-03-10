import React from "react";
// import whoArray from './who.json';
import WhoToFollowListItem from "./who-to-follow-list-item";
import { useSelector } from "react-redux";

const WhoToFollowList = () => {
    const whoArray = useSelector(       // retrieve state from the store
        (state) => state.who
    );

    return (
        <ul className="list-group">
            <li className="list-group-item">
                <h2>Who to follow</h2>
            </li>
            {
                whoArray.map(who =>
                    <WhoToFollowListItem
                        key={who._id}
                        who={who} />
                )
            }
        </ul>
    );
};
export default WhoToFollowList;