import axios from 'axios';
import React, { useState } from 'react';
import './Addsong.css';
const Form = () => {
    const [date, setDate] = useState();
    const [popup, setPop] = useState(false);
    const handleClickOpen = () => {
        setPop(!popup);
    };

    const closePopup = () => {
        setPop(false);
    };

    const [user, setUser] = useState({
        artistname: "",
        ArtistDOB: "",
        bio: ""
    })
    const { artistname, ArtistDOB, bio } = user;

    const onInputChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        console.log(user);
    };

    const onSubmit = async e => {
        e.preventDefault();

        axios.post("http://localhost:3002/artist", user);


    };
    const [Song, setSong] = useState({
        songname: "",
        dor: "",
        artist: ""
    })
    const { songname, dor, artist,image } = Song;

    const onInputSong = e => {
        setSong({
            ...Song,
            [e.target.name]: e.target.value
        })
        console.log(Song);
    }
    const onSubmitsong = async e => {
        e.preventDefault();

        axios.post("http://localhost:3001/users", Song);


    };
    return (<>
        <div className="data">
            <h4 className="heading">Adding new Songs</h4>
            <form>
                <div className="form-group">
                    <label for="formGroupExampleInput2" className="sn">Song Name </label>
                    <input type="text" value={songname} name="songname" ClassName="form-control" onChange={e => onInputSong(e)} />
                </div>
                <div className="form-group">
                    <label for="formGroupExampleInput2" className="dor">Date of Release </label>
                    <input type="text" value={dor} name="dor" className="form-control" onChange={e => onInputSong(e)} />
                </div>
            </form>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" value={image} name="image" id="inputGroupFileAddon01">Upload image</span>
                </div>
                <div className="custom-file">
                    <input type="file" className="custom-file-input"
                        aria-describedby="inputGroupFileAddon01" />

                </div>
            </div>
            <div className='drop'>
                <select value={artist} name="artist" onChange={e => onInputSong(e)}>
                    <option value='Kishore kumar'>Kishore Kumar</option>
                    <option value="Sanu">Kumar Sanu</option>
                    <option value="Alka Yagnik">Alka Yagnik</option>
                    <option value="Udit Narayan">Udit Narayan</option>
                    <option value="Sonu Nigam">Sonu Nigam</option>
                    <option value="shreya ghoshal">shreya ghoshal</option>
                    <option value="Lata Mangeshkar">Lata Mangeshkar</option>
                    <option value="Mohammed Rafi">Mohammed Rafi</option>
                    <option value="Asha Bhosle">Asha Bhosle</option>
                    <option value="Jagjit Singh">Jagjit Singh</option>
                </select>
            </div>
            <div className='button'>
                <button variant="outline-secondary" className='cancel '>Cancel</button>
                <button type="button" className="btn btn-dark submit " onClick={e => onSubmitsong(e)}>Submit</button>
                <button type="button" className="btn btn-dark addartist " onClick={handleClickOpen}>addartist</button>
            </div>

        </div>
        <div>
            {popup ?
                <div className="popup">
                    <div className="popup-header">
                        <h1>Add Artist</h1>
                        <button onClick={closePopup}>X</button>
                    </div>
                    <div>

                        <form onSubmit={e => onSubmit(e)}>
                            <div className="popartist">
                                <label for="formGroupExampleInput2" className="sn">Artist Name </label>
                                <input type="text" className="form-control" value={artistname} onChange={e => onInputChange(e)} name='artistname' id="formGroupExampleInput2" />
                            </div>
                            <div className='popdate'>
                            <label for="formGroupExampleInput2" className="sn">Artist BirthDay </label>
                                <input type="text" className="form-control" value={ArtistDOB} onChange={e => onInputChange(e)} name='ArtistDOB' id="formGroupExampleInput2" />
                                </div>

                            <div>
                                <label for="formGroupExampleInput2" className="sn">Bio </label>
                                <textarea className="form-control" name='bio' value={bio} onChange={e => onInputChange(e)}
                                    rows="2"></textarea>
                            </div>
                            <div className='popbutton'>
                                <button variant="outline-secondary" className='c' onClick={closePopup}>Cancel</button>
                                <button type="button" className="btn btn-dark s" onClick={e => onSubmit(e)}>Submit</button>
                            </div>
                        </form>

                    </div>
                </div> : ""}
        </div>
    </>
    );
};

export default Form;