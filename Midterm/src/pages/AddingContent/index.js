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
    const [director, setDirector] = useState("");
    const [status, setStatus] = useState("");
    const [platform, setPlatform] = useState("");
    const [year, setYear] = useState("");
    const [img, setImg] = useState("");
    const [memo, setMemo] = useState("");
    const [selected, setSelected] = useState(false);

    const HandleAdding = async(title, director, status, platform, year, img, memo) => {
        let resp = await axios.post("/api/movies", {
            title: title,
            director: director,
            status: status,
            platform: platform,
            year: year,
            img:img,
            memo:memo
            
        })
        console.log(resp);
    }

    return <div className="add-content">
        <TopBar/>
        <InputComp inputtitle={"Content Name"} catchInput={(e)=>{
            setTitle(e.target.value)
        }}/>
        <div className="contnet-infomation">
            <InputComp inputtitle={"Director"} catchInput={(e)=>{
                setDirector(e.target.value)
            }}/>

            <InputComp inputtitle={"Year"} catchInput={(e)=>{
                setYear(e.target.value)
            }}/>   
        </div>
        <h2>Status</h2>
        <div className="status">
            <Status selected={selected} onClick={()=>{
                setStatus("watching")
                setSelected(!selected)
            }} text="Watching" bg="watching"/>
            <Status selected={selected} onClick={()=>{
                setStatus("watched")
                setSelected(!selected)
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
            <table>
                <tr>
                    <td> 
                    <Platform onClick={()=>{
                        setPlatform("Netflix")
                    }} text="Netflix" bg="netflix" color="black"/>
                    </td>
                    <td>
                    <Platform onClick={()=>{
                        setPlatform("Disney+")
                    }} text="Disney +" bg="disney"/>

                    </td>
                </tr>
                <tr>
                    <td>
                    <Platform onClick={()=>{
                        setPlatform("Amazon")
                    }} text="Amazon" bg="amazon" color="black"/>
                    </td>
                    <td> 
                    <Platform onClick={()=>{
                        setPlatform("Hulu")
                    }} text="Hulu" bg="hulu" color="black"/>

                    </td>
                </tr>
            </table>
        </div>
        <Memo catchMemo={(e)=>{
            setMemo(e.target.value)
        }}/>
        <Button onClick={()=>{
            HandleAdding(title, director, status, platform, year, img)
        }} text="Add"/>

    </div>
}

export default AddContent;
