import React, { useState } from "react";
import { deleteTuit, likedToggle } from "./tuits-reducer";

import { useSelector, useDispatch } from "react-redux";


// const toggleLiked = (post) => {          // handle checkbox click event, accept todo index
//     dispatch(likedToggle(post))          // send index to reducer function passing index
// };

const TuitItem = (
    {
        tuit = {
            "userName": "Novak Djokovic",
            "time": "50mins",
            "title": "I'm very grateful for the kind of energy and reception and love and support I got last night.",
            "image": "Novak_400x400.jpeg",
            "handle": "@novak_djokovic",
            "tuit": " TBD "
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    };
    const likedHandler = (tuit) => {
        dispatch(likedToggle(tuit));
    };
    const getlikesNumber = (liked, likes) => {
        return liked? likes + 1 : likes;
    };

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-auto mt-1">
                    <img className="float-end rounded-circle" width={50} src={`/images/${tuit.image}`} alt='Avatar Image' />
                </div>

                <div className="col-10">
                    <div>
                        <i className="bi bi-x-lg float-end"
                            onClick={() => deleteTuitHandler(tuit._id)}></i>
                        <span className="fw-bold"> {tuit.userName} </span>
                        <i className="bi bi-patch-check-fill text-primary"></i>
                        <span className="text-secondary"> {tuit.handle} • {tuit.time} </span>
                    </div>
                    {/* <p>{post.title}</p> */}
                    <div className="text-secondary">
                        {tuit.tuit && <p >{tuit.tuit}</p>}
                    </div>

                    {/* <TuitStats /> */}
                    <div className="row pt-2">
                        <div className="col">
                            <i className="bi bi-chat"></i>
                            <span> {tuit.replies} </span>
                        </div>
                        <div className="col">
                            <i className="bi bi-arrow-repeat"></i>
                            <span> {tuit.retuits} </span>
                        </div>
                        <div className="col">
                            <i className={tuit.liked? "bi bi-heart-fill text-danger" : "bi bi-heart"}
                                onClick={() => likedHandler(tuit)}></i>
                                <span> {getlikesNumber(tuit.liked, tuit.likes)} </span>
                        </div>
                        <div className="col">
                            <i className="bi bi-share"></i>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default TuitItem;

