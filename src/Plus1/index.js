import React from 'react';

import ExploreComponent from "./explore";
import NavigationSidebar from './navigation-sidebar';
import HomeComponent_a7 from './home';

import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";       // import the new tuits reducer
import userReducer from "./profile/profile-reducer";
import PostSummaryList_a7 from './post-summary-list/index';
import ProfileComponent from './profile';
import EditProfile from './edit-profile';

import { Routes, Route } from "react-router";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";


const store = configureStore(
    { reducer: { 
        who: whoReducer, 
        tuitsData: tuitsReducer,
        user: userReducer } }
);

function Plus1() {
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-2 col-xl-2">
                    <NavigationSidebar active="explore" />
                </div>
                <div className="col-10 col-md-10 col-lg-9 col-xl-9"
                    style={{ "position": "relative" }}>

                    <Routes>

                        <Route path="home" element={<HomeComponent_a7 />} />

                        <Route path="explore" element={<ExploreComponent />} />

                        <Route path="lists" element={<PostSummaryList_a7 />} />

                        <Route path="profile" element={<ProfileComponent />} />

                        <Route path="profile/edit-profile" element={<EditProfile />} />

                    </Routes>

                </div>
                {/* <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4"> */}
                <div className="d-none d-lg-block col-lg-4 col-xl-4 col-xxl-4 ">

                </div>
            </div>
        </Provider>
    );
}

export default Plus1;