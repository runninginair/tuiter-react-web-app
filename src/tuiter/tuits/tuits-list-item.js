import { autoBatchEnhancer } from "@reduxjs/toolkit";
import React from "react";
import TuitStats from "./tuits-stats";

const TuitListItem = (
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

        <li className="list-group-item">

            <div className="container mt-1">
                <div className="row">
                    <div className="col-auto mt-1">
                        <img className="rounded-circle" height={58} src={`/images/${tuit.image}`} alt='Avatar Image' />
                    </div>

                    <div className="col-10">

                        <div>
                            <span className="wd-author-font"> {tuit.userName} </span>
                            <span className="${tuit.isSubscribed ? `wd-color-gold` : ``}">
                                <i class="bi bi-patch-check-fill text-primary"></i>
                            </span>
                            <span className="wd-handle-font-2 wd-fg-color-smoke"> {tuit.handle} • {tuit.time}</span>
                        </div>

                        <div className="wd-main-content-style wd-fg-color-wht">
                            <p>{tuit.title}</p>
                        </div>

                        <div className="wd-img-content-style wd-post-border wd-rounded-corners">
                            <img className="wd-img-style wd-rounded-corners" width={525} src={`/images/${tuit.photo}`} alt='Photo' />
                            <span>
                                {tuit.title && <p>{tuit.title}</p>}
                                {tuit.tuit && <p >{tuit.tuit}</p>}
                            </span>
                        </div>

                        <TuitStats />

                    </div>

                </div>
            </div>

        </li>

    );
};
export default TuitListItem;