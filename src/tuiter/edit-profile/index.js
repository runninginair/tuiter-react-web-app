import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAdmin } from "../profile/profile-reducer";

// import TuitsList from "../tuits";
// import WhatsHappening from "./whats-happening";

const EditProfile = () => {

    const { user } = useSelector((state) => state.user);
    const [profile, setProfile] = useState(user);
    // const dispatch = useDispatch();
    // const handleSaveButton = () => {
    //     dispatch(updateAdmin(profile));
    // }


    return (
        <>
            <div className="row">
                <i className="col-1 bi bi-x"> </i>
                <h4 className="col-9">Edit Profile</h4>
                <button className="col-2 btn btn-dark rounded-5 float-end">Save</button>
            </div>


            <label>First Name</label><br />
            <input
                placeholder="First Name"
                value={profile.firstName}
                onChange={(e) => setProfile({
                    ...profile,
                    firstName: e.target.value,
                })} /><br /><br />

            <label>Last Name</label><br />
            <input value={profile.lastName}
                onChange={(e) => setProfile({
                    ...profile,
                    lastName: e.target.value,
                })} />
                
            <br /><br />

            <label>Bio</label><br />
            <textarea name="Text1" cols="40" rows="5" value={profile.bio} onChange={(e) => setProfile({
                    ...profile,
                    bio: e.target.value,
                })}></textarea>

            {/* <input
                value={profile.bio}
                onChange={(e) => setProfile({
                    ...profile,
                    bio: e.target.value,
                })} /> */}
                
            <br /><br />

            <label>Location</label><br />
            <input
                value={profile.location}
                onChange={(e) => setProfile({
                    ...profile,
                    location: e.target.value,
                })} /><br /><br />

            <label>website</label><br />
            <input
                value={profile.website}
                onChange={(e) => setProfile({
                    ...profile,
                    address: e.target.value,
                })} /><br /><br />

            <label>Birt date</label>   <button>Edit</button> <br/ >
            <input
                type={DataView}
                onChange={(e) => setProfile({
                    ...profile,
                    address: e.target.value,
                })} /><br /><br />

            Switch to professional 
            <i className="bi bi-chevron-right float-end"></i>

            <br /><br />

        </>
    );
};

export default EditProfile;

