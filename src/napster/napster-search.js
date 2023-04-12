import React, { useState, useEffect } from "react";
import { fullTextSearch } from "./napster-services";
import { Link, useNavigate, useParams } from "react-router-dom";

function NapsterSearchScreen() {

    const {searchTerm} = useParams();
    const navigate = useNavigate();

    const [search, setSearch] = useState(searchTerm || "");
    const [results, setResults] = useState({});

    const searchNapster = async () => {
        const response = await fullTextSearch(search);
        setResults(response);
        // console.log(response);
        navigate(`/napster/search/${search}`);
    };

    useEffect(()=> {
        if (searchTerm) {
            searchNapster();
        }
    }, [searchTerm]);

    return (
        <div>
            <h1>Napster Search</h1>

            <button onClick={searchNapster} className="btn btn-primary float-end">
                Seartch
            </button>

            <input
                className="form-control w-75"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)} />

            <h2>Albums</h2>
            <div className="table-responsive">
                <table className="table">
                    <tbody>
                        <tr>
                            {results.albums && results.albums.map((album) => (
                                <td key={album.id}>
                                    <Link to={`/napster/album/${album.id}`}>
                                    {/* Following source comes from https://develper.prod.napster.com
                                    https://api.napster.com/imageserver/v2/albums/{album_id}/images/{size}.{extension} */}
                                    <img
                                        src={`https://api.napster.com/imageserver/v2/albums/${album.id}/images/200x200.jpg`}
                                    />
                                    <h3>{album.name}</h3>
                                    {album.id}
                                    </Link>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>Tracks</h2>
            <div className="table-responsive">
                <table className="table">
                    <tbody>
                        <tr>
                            {results.tracks && results.tracks.map((track) => (
                                <td>
                                    <h3>{track.name}</h3>
                                    {track.id}
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>Artists</h2>
            <div className="table-responsive">
                <table className="table">
                    <tbody>
                        <tr>
                            {results.artists && results.artists.map((artist) => (
                                <td>
                                    <h3>{artist.name}</h3>
                                    {artist.id}
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* for develper debugging use */}
            <pre> {JSON.stringify(results, null, 2)} </pre>

        </div>
    );
}


export default NapsterSearchScreen;