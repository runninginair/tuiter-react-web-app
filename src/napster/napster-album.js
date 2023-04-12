import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAlbumsTracks, getAlbum } from "./napster-services";

function NapsterAlbumDetailsScreen() {
    const { id } = useParams();
    const [tracks, setTracks] = useState([]);
    const [album, setAlbum] = useState([]);
    const fetchTracks = async () => {
        const response = await getAlbumsTracks(id);
        setTracks(response);
    };
    const fetchAlbum = async () => {
        const response = await getAlbum(id);
        setAlbum(response);
    };

    useEffect(() => {
        fetchTracks();
        fetchAlbum();
    }, []);

    return (
        <div>
            <h1> Album：{album.name} </h1>
            <h3> Artist: {album.artistName} </h3>
            <h5> Released Date: {album.released}</h5>
            <img
                src={`https://api.napster.com/imageserver/v2/albums/${id}/images/400x400.jpg`}
            />

            <h2> Tracks </h2>

            <ul className="list-group">
                {tracks.map((track) => (
                    <ii className="list-group-item">

                        <audio controls className="float-end" src={track.previewURL}>
                            <a href="track.previewURL">Download audio</a>
                        </audio>

                        <h5>
                            <Link to={`/napster/track/${track.id}`} >
                                {track.name}
                            </Link>
                        </h5>
                        {/* {track.id}
                        {track.previewURL} */}

                    </ii>
                ))}
            </ul>

            {/* For Developer debugging use, not for customers. */}
            <pre> {JSON.stringify(album, null, 2)} </pre>
            <pre> {JSON.stringify(tracks, null, 2)} </pre>

        </div>

    );
}

export default NapsterAlbumDetailsScreen;