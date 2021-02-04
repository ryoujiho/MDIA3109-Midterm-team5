import axios from 'axios';
import Button from 'comps/Button';
import InputComp from 'comps/Input';
import Memo from 'comps/Memo';
import Platform from 'comps/Platform';
import Status from 'comps/Status';
import Arrowbar from 'comps/Arrowbar';
import React, { useState } from 'react';


const ContentEdit = () => {

    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [status, setStatus] = useState("");
    const [platform, setPlatform] = useState("");
    const [year, setYear] = useState("");
    const [img, setImg] = useState("");
    const [memo, setMemo] = useState("");
    const [selected, setSelected] = useState(false);

    const HandleAdding = async (title, director, status, platform, year, img, memo) => {
        let resp = await axios.post("/api/movies", {
            title: title,
            director: director,
            status: status,
            platform: platform,
            year: year,
            img: img,
            memo: memo

        })
        console.log(resp);
    }

    return <div className="add-content">
        <Arrowbar/>
        <h1>Star Trek:Beyond</h1>
        <h3>Adam Robitel 2016 Action/Sci-Fi Movie</h3>
        <div>
        <h2>Status</h2>
        </div>
        <div className="status">
            <table>
                <tr>
                    <td>
                        <Status className="btn" selected={selected} onClick={() => {
                            setStatus("watching")
                            setSelected(!selected)
                        }} text="Watching" bg="watching" />
                    </td>
                    <td>
                        <Status className="btn" selected={selected} onClick={() => {
                            setStatus("watched")
                            setSelected(!selected)
                        }} text="Watched" bg="watched" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Status className="btn" onClick={() => {
                            setStatus("waiting")
                        }} text="Waiting" bg="waiting" />
                    </td>
                    <td>
                        <Status className="btn" onClick={() => {
                            setStatus("stopped")
                        }} text="Stopped" bg="stopped" />
                    </td>
                </tr>
            </table>
        </div>
        <h2>Platform</h2>
        <div className="platform">
            <table>
                <tr>
                    <td>
                        <Platform className="btn" onClick={() => {
                            setPlatform("Netflix")
                        }} text="Netflix" bg="netflix" color="black" />
                    </td>
                    <td>
                        <Platform className="btn" onClick={() => {
                            setPlatform("Disney+")
                        }} text="Disney +" bg="disney" />

                    </td>
                </tr>
                <tr>
                    <td>
                        <Platform className="btn" onClick={() => {
                            setPlatform("Amazon")
                        }} text="Amazon" bg="amazon" color="black" />
                    </td>
                    <td>
                        <Platform className="btn" onClick={() => {
                            setPlatform("Hulu")
                        }} text="Hulu" bg="hulu" color="black" />

                    </td>
                </tr>
            </table>
        </div>
        <Memo catchMemo={(e) => {
            setMemo(e.target.value)
        }} />
        <Button onClick={() => {
            HandleAdding(title, director, status, platform, year, img)
        }} text="Done" />

    </div>
}

export default ContentEdit;
