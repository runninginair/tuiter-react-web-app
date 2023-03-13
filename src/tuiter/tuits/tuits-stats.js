import React from "react";

const TuitStats = (
    {
        post = {
            replies: 0,
            retuits: 0,
            liked: false,
            likes: 0,
        }
    }
) => {
    return (
        <div className="row pt-2">
            <div className="col">
                <i className="bi bi-chat"></i>
                <span> {post.replies} </span>
            </div>
            <div className="col">
                <i class="bi bi-arrow-repeat"></i>
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
    );
};

export default TuitStats;