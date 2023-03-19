import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "./profile-reducer";

const ProfileComponent = () => {

    const { user } = useSelector((state) => state.user);
    const [profile, setProfile] = useState(user);
    const dispatch = useDispatch();
    const handleSaveButton = () => {
        dispatch(updateUser(profile));
    };

    return (
        <div className="container">

            {/* <h4>Admin Profile Component</h4> */}

            <div className="row">
                <div className="col-2">
                    <Link to="../home">
                        <i className="col-1 bi bi-arrow-left ms-3 fs-4 mt-4 text-black "></i>
                    </Link>
                </div>

                <div className="col-auto">
                    <h5> {profile.firstName} {profile.lastName} </h5>
                    <span>4,041 Tuits</span>
                </div>


            </div>

            <img className="img-fluid"
                src={`/images/${profile.bannerPicture}`} alt='Banner Image' />
            <br />

            <img width={120} className="rounded-circle ms-3 bottom-left"
                src={`/images/${profile.profilePicture}`} alt='Profile Image' />

            <Link to="../edit-profile" >
                <button className="btn btn-outline-dark rounded-5 mt-3 me-3 float-end">Edit Profile</button>
            </Link><br />

            <div className="mt-3 mb-4">
                <span className="fw-bold fs-5"> {profile.firstName} {profile.lastName} </span><br />
                <span className="text-secondary"> {profile.handle} </span>
            </div>

            <div>
                <p>{profile.bio}</p>
            </div>

            <div className="row text-secondary mb-3">
                <div className="col-auto">
                    <i className="bi bi-geo-alt"></i>&nbsp;
                    {profile.location}
                </div>
                <div className="col-auto">
                    <i className="bi bi-balloon"></i>&nbsp;
                    Born {profile.dateOfBirth}
                </div>

                <div className="col-3">
                    <i className="bi bi-calendar3"></i>&nbsp;
                    Joined {profile.dateJoined}
                </div>
            </div>

            <div>
                <span className="fw-bold">{profile.followingCount}</span>
                <span className="text-secondary"> Following </span>
                &nbsp;&nbsp;&nbsp;
                <span className="fw-bold">{profile.followersCount}</span>
                <span className="text-secondary"> Followers </span>
            </div><br /><br />
        </div>
    );
};

export default ProfileComponent;
