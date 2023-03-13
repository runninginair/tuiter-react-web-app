import React from "react";
import PostSummaryItem from "./post-summary-item";
import { useSelector } from "react-redux";
import TuitItem_a7 from "../tuits/tuits-item";
import TuitStats from "../tuits/tuits-stats"

const PostSummaryList_a7 = () => {
    const postsArray = useSelector(
        state => state.tuits
    );

    return (
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostSummaryItem
                        key={post._id}
                        post={post} 
                    />
                )
            }
        </ul>
    );
};

export default PostSummaryList_a7;