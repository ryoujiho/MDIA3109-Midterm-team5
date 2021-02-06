import axios from 'axios';
import Button from 'comps/Button';
import InputComp from 'comps/Input';
import Memo from 'comps/Memo';
import Platform from 'comps/Platform';
import Status from 'comps/Status';
import TopBar from 'comps/Topbar';
import React, { useState } from 'react';


const AddContent = () => {

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


    const StatusArr = [
        "Watching",
        "Watched",
        "Waiting",
        "Stopped"
    ]
    
    const PlatformArr = [
        "Apple",
        "Youtube",
        "Netflix",
        "Disney",
        "Amazon",
        "Hulu"
    ]

    return <div className="add-content">
        <TopBar />
        <InputComp className="content-name" inputtitle={"Content Name"} catchInput={(e) => {
            setTitle(e.target.value)
        }} />
        <div className="content-infomation">
            <InputComp inputtitle={"Director"} catchInput={(e) => {
                setDirector(e.target.value)
            }} />

            <InputComp inputtitle={"Year"} catchInput={(e) => {
                setYear(e.target.value)
            }} />
        </div>
        <div className="contents-status-platform">
            <div className="status">
                    <h2>Status</h2>
                        {StatusArr.map((i)=>{
                            return (
                                    <Status className="btn" 
                                    onClick={()=>{
                                        setStatus(i)
                                    }}
                                    selected={status.includes(i) ? "inset 0px 0px 0px 2px #000" : "none" }
                                    text={i} bg={i} />
                                )
                            })}
            </div>
            <div className="platform">
                <h2>Platform</h2>
                    {PlatformArr.map((i)=>{
                            return (
                                <td>
                                    <Platform className="btn" 
                                    onClick={()=>{
                                        setPlatform(i)
                                    }}
                                    selected={platform.includes(i) ? "inset 0px 0px 0px 2px #000" : "none" }
                                    text={i} bg={i} />
                                </td>
                            )
                        })}
            </div>
        </div>
        <Memo catchMemo={(e) => {
            setMemo(e.target.value)
        }} />
        <Button onClick={() => {
            HandleAdding(title, director, status, platform, year, img)
        }} text="Add" />

    </div>
}

export default AddContent;
