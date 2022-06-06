import React, { useState, useEffect, useSyncExternalStore, useInsertionEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [user, setUser] = useState([]);
    const [Song, setSong] = useState([]);
    useEffect(() => {
        loadUsers();
        loadSong();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3002/artist");
        setUser(result.data);
    };
    const loadSong = async () => {
        const resultSong = await axios.get("http://localhost:3001/users");
        setSong(resultSong.data);
    };
    return (
        <div className='container'>
            <div className="mb-3">
                <h2>Top 10 Songs</h2>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Song</th>
                            <th scope="col">Artist</th>
                            <th scope="col">Date of Release</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Song.map((Song, j) => (
                            <tr>
                                <img scope='col'src={Song.image}/> 
                                <th scope="col">{Song.songname}</th>
                                <th scope="col">{Song.artist}</th>
                                <th scope="col">{Song.dor}</th>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h2>Top 10 Artist</h2>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Artist Name</th>
                            <th scope="col">Bio</th>
                            <th scope="col"> BirthDay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((user) => (

                            <tr>
                                <td>{user.artistname}</td>
                                <td>{user.bio}</td>
                                <td>{user.ArtistDOB}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

};
export default Home;