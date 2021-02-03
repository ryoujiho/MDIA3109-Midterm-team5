import React, {useState, useEffect} from 'react';
import TopBar from 'comps/Topbar';
import InputComp from 'comps/Input';
import Status from 'comps/Status';
import Platform from 'comps/Platform';
import Memo from 'comps/Memo';
import Button from 'comps/Button';
import axios from 'axios';


const AddContent = () => {

    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("");
    const [platform, setPlatform] = useState("");
    const [year, setYear] = useState("");

    const HandleAdding = async(title, status, platform, year) => {
        let resp = await axios.post("/api/movies", {
            title: title,
            status: status,
            platform: platform,
            year: year
            
        })
        console.log(resp);
    }

    return <div className="add-content">
        <TopBar/>
        <InputComp catchInput={(e)=>{
            setTitle(e.target.value)
        }}/>
        <h2>Status</h2>
        <div className="status">
            <Status onClick={()=>{
                setStatus("watching")
            }} text="Watching" bg="watching"/>
            <Status onClick={()=>{
                setStatus("watched")
            }} text="Watched" bg="watched"/>
            <Status onClick={()=>{
                setStatus("waiting")
            }} text="Waiting" bg="waiting"/>
            <Status onClick={()=>{
                setStatus("stopped")
            }} text="Stopped" bg="stopped"/>
        </div>
        <h2>Platform</h2>
        <div className="platform">
            <Platform onClick={()=>{
                setPlatform("Netflix")
            }} text="Netflix" bg="netflix" color="black"/>
            <Platform onClick={()=>{
                setPlatform("Disney+")
            }} text="Disney +" bg="disney"/>
            <Platform onClick={()=>{
                setPlatform("Amazon")
            }} text="Amazon" bg="amazon" color="black"/>
            <Platform onClick={()=>{
                setPlatform("Hulu")
            }} text="Hulu" bg="hulu" color="black"/>
        </div>
        <Memo catchMemo={(e)=>{
            setYear(e.target.value)
        }}/>
        <Button onClick={()=>{
            HandleAdding(title, status, platform, year)
        }} text="Add"/>

    </div>
}

export default AddContent;
