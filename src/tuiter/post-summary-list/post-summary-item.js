import React from "react";

const PostSummaryItem = (
    {
        post = {
            "topic": "Tesla on Mars",
            "userName": "Tesla",
            "time": "0.5h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "Tesla_logo_500x500.jpeg"
        }
    }
) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div>
                        <span className="fw-bolder text-primary">{post.userName}</span>
                        <span className="text-secondary"> • {post.time}</span>
                         </div>
                    <div className="fw-bolder text-dark">{post.topic}</div>
                    <div className="text-secondary">{post.title}</div>
                </div>
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={`/images/${post.image}`} alt='Post Image' />
                </div>
            </div>
        </li>
    );
};

export default PostSummaryItem;
