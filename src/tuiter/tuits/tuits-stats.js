import React from "react";

const TuitStats = (
    {
        tuit = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonistsbeing building Mars Base 1",
            "image": "NASA_400x400.jpeg",
            "photo": "spaceX_starship.jpeg",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    return (

        <div className="row pt-2">

            <div className="col">
                <i className="bi bi-chat"></i>
                <span> {tuit.replies} </span>
            </div>

            <div className="col">
                <i class="bi bi-arrow-repeat"></i>
                <span> {tuit.retuits} </span>
            </div>

            <div className="col ${tuit.Liked ? `wd-liked-style` : ``}">
                {tuit.liked && <i className="bi bi-heart-fill text-danger"></i>}
                {tuit.liked || <i className="bi bi-heart"></i>}
                <span> {tuit.likes} </span>
            </div>

            <div className="col">
                <i className="bi bi-share"></i>
            </div>

        </div>

    );
};

export default TuitStats;    