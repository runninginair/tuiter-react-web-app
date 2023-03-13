import React, { useState }  from "react";
import { deleteTuit } from "./tuits-reducer";
import { autoBatchEnhancer } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

// const dispatch = useDispatch();
// const deleteTuitHandler = (id) => {
//     dispatch(deleteTuit(id));
// }

const TuitItem = (
    {
        post = {
            "userName": "Novak Djokovic",
            "time": "50mins",
            "title": "I'm very grateful for the kind of energy and reception and love and support I got last night.",
            "image": "Novak_400x400.jpeg",
            "handle": "@novak_djokovic",
            "tuit": " TBD "
        }
    }
) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-auto mt-1">
                    <img className="float-end rounded-circle" width={50} src={`/images/${post.image}`} alt='Avatar Image' />
                </div>

                <div className="col-10">
                    <div>
                        {/* <i className="bi bi-x-lg float-end"
                            onClick={() => deleteTuitHandler(post._id)}></i> */}
                        <i className="bi bi-x-lg float-end" onClick={alert}></i>
                        <span className="fw-bold"> {post.userName} </span>
                        <i className="bi bi-patch-check-fill text-primary"></i>
                        <span className="text-secondary"> {post.handle} • {post.time} </span>
                    </div>
                    {/* <p>{post.title}</p> */}
                    <div className="text-secondary">
                        {post.tuit && <p >{post.tuit}</p>}
                    </div>

                    {/* <TuitStats /> */}
                    <div className="row pt-2">
                        <div className="col">
                            <i className="bi bi-chat"></i>
                            <span> {post.replies} </span>
                        </div>
                        <div className="col">
                            <i className="bi bi-arrow-repeat"></i>
                            <span> {post.retuits} </span>
                        </div>
                        <div className="col">
                            {post.liked && <i className="bi bi-heart-fill text-danger"></i>}
                            {post.liked || <i className="bi bi-heart"></i>}
                            <span> {post.likes} </span>
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

