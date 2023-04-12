import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTrack } from "./napster-services";

function NapsterTrackDetailsScreen() {
    const { id } = useParams();
    const [track, setTrack] = useState({});
    const fetcTrack = async () => {
        const response = await getTrack(id);
        setTrack(response);
    };

    useEffect(() => {
        fetcTrack();
    }, []);

    return (
        <div>
            <h5>
                Track Details: ID: {id}
            </h5>
            <h1>
                {track.name}
            </h1>

            <pre>{JSON.stringify(track, null, 2)}</pre>
        </div>
    );
}

export default NapsterTrackDetailsScreen;