import { createSlice } from "@reduxjs/toolkit";
import tuits from '../data/tuits.json';
// import { useSelector } from "react-redux";
// import React, { useState } from "react";
// import { Store } from "redux";

const currentUser = {                        // create an object that represents the currently
    "userName": "Novak Djokovic",            // logged in user which contains profile information
    "handle": "@DjokerNole",                 // such as username, their avatar logo, and handle.
    "image": "Novak_400x400.jpeg",           // Later this will come from users login in.
};


const templateTuit = {                       // create a template tuit object with some default
    ...currentUser,                          // values and copy over the fields userName, handle and
    "topic": "Programing",                   // image from the currentUser
    "time": "1min",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

// const {user} = useSelector((state) => state.user);
// currentUser.userName = (user.firstName + " " + user.lastName);


const tuitsSlice = createSlice(
    {
        name: 'tuits',
        initialState: tuits,

        reducers: {                                 // add createTuit reducer function which appends
            createTuit(state, action) {             // the new tuit in the payload at the beginning of the
                state.unshift({                     // array of tuits contained in the state. Also copy
                    ...action.payload,              // all fields from templateTuit and initialize
                    ...templateTuit,                // the unique identifier with a timestamp
                    _id: (new Date()).getTime(),
                })
            },

            deleteTuit(state, action) {
                const index = state.findIndex(tuit =>
                    tuit._id === action.payload);
                state.splice(index, 1);
            },

            likedToggle(state, action) {
                const tuit = state.find((tuit) =>
                    tuit._id === action.payload._id);
                tuit.liked = !tuit.liked;
            }

        }
    }
);

export default tuitsSlice.reducer;
export const { createTuit, deleteTuit, likedToggle } = tuitsSlice.actions;     // export reducer function