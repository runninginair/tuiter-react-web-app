import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../profile/profile-reducer";
import { Link } from "react-router-dom";


// import TuitsList from "../tuits";
// import WhatsHappening from "./whats-happening";

const EditProfile = () => {

    const { user } = useSelector((state) => state.user);
    const [profile, setProfile] = useState(user);
    const dispatch = useDispatch();
    const handleSaveButton = () => {
        dispatch(updateUser(profile));
    }


    return (
        <>
            <div className="row">
                <div className="col-1">
                    <Link to="../profile" >
                        <i className="bi bi-x fs-3 mt-1 text-black"> </i>
                    </Link>
                </div>

                <h4 className="col-9 mt-2 ms-2">Edit Profile</h4>
                <button 
                    onClick={handleSaveButton}
                    className="col btn btn-dark rounded-5 float-end me-4">Save</button>
            </div>

            <div>
                <img className="img-fluid mt-3"
                    src={`/images/${profile.bannerPicture}`} alt='Banner Image' /><br />
                <img width={120} className="rounded-circle ms-3 mb-4"
                    src={`/images/${profile.profilePicture}`} alt='Profile Image' />
            </div>



            <div className="input-group ms-3 me-3 mb-5">

                <div className="input-group-addon">
                    <label className="text-secondary">First Name</label><br />
                    <input
                        size={71}
                        placeholder="FirstName"
                        value={profile.firstName}
                        onChange={(e) => setProfile({
                            ...profile,
                            firstName: e.target.value,
                        })} /><br /><br />
                </div>

                <div className="input-group-addon">
                    <label className="text-secondary">Last Name</label><br />
                    <input
                        size={71}
                        placeholder="LastName"
                        value={profile.lastName}
                        onChange={(e) => setProfile({
                            ...profile,
                            lastName: e.target.value,
                        })} /><br /><br />
                </div>

                <div className="input-group-addon">
                    <label className="text-secondary">Bio</label><br />
                    <textarea name="Text1" cols="70" rows="5" value={profile.bio} onChange={(e) => setProfile({
                        ...profile,
                        bio: e.target.value,
                    })}></textarea><br /><br />
                </div>

                <div className="input-group-addon">
                    <label className="text-secondary">Location</label><br />
                    <input
                        size={71}
                        placeholder="City, State/Province"
                        value={profile.location}
                        onChange={(e) => setProfile({
                            ...profile,
                            location: e.target.value,
                        })} /><br /><br />
                </div>

                <div className="input-group-addon">
                    <label className="text-secondary">Website</label><br />
                    <input
                        size={71}
                        placeholder="https://yourURL"
                        value={profile.website}
                        onChange={(e) => setProfile({
                            ...profile,
                            website: e.target.value,
                        })} /><br /><br />
                </div>

                <div className="input-group-addon">
                    <label>Birth date</label> • <span className="text-primary">Edit</span> <br />
                    <input
                        type={DataView}
                        size={71}
                        placeholder="MM / DD / YYYY"
                        value={profile.dateOfBirth}
                        onChange={(e) => setProfile({
                            ...profile,
                            dateOfBirth: e.target.value,
                        })} /><br /><br />
                </div>

            </div>

            <div className="fs-4">
                <i className="bi bi-chevron-right float-end"></i>
                <span className="ms-3">Switch to professional</span>
            </div><br /><br /><br />

        </>
    );
};

export default EditProfile;

