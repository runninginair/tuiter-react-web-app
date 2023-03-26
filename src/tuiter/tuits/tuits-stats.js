import React from "react";

import { likedToggle } from "./tuits-reducer";
import { useDispatch } from "react-redux";


const TuitStats = (
    {
        stats = {
            "replies": 0,
            "retuits": 0,
            "liked": false,
            "likes": 0,
        }
    }
) => {

    const dispatch = useDispatch();

    const likedHandler = (stats) => {
        dispatch(likedToggle(stats));
    };

    const getlikesNumber = (liked, likes) => {
        return liked ? likes + 1 : likes;
    };


    return (
        <div className="row pt-2">
            <div className="col">
                <i className="bi bi-chat"></i>
                <span> {stats.replies} </span>
            </div>
            <div className="col">
                <i className="bi bi-arrow-repeat"></i>
                <span> {stats.retuits} </span>
            </div>
            <div className="col">
                <i className={stats.liked ? "bi bi-heart-fill text-danger" : "bi bi-heart"}
                    onClick={() => likedHandler(stats)}></i>
                <span> {getlikesNumber(stats.liked, stats.likes)} </span>
            </div>
            <div className="col">
                <i className="bi bi-share"></i>
            </div>
        </div>
    );
};

export default TuitStats;