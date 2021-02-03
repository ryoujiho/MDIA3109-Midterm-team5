import React, {useState} from 'react';
import TopBar from 'comps/Topbar';
import Button from 'comps/Button';
import Memo from 'comps/Memo';
import Input from 'comps/Input';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

const ContentInfo = (props) => {

    var contents = props.location.state.o;
    console.log(contents)

    const [id, setId] = useState(contents.id);
    console.log(contents.id);
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [status, setStatus] = useState("");
    const [platform, setPlatform] = useState("");
    const [year, setYear] = useState("");
    const [img, setImg] = useState("");
    const [memo, setMemo] = useState("");

    const HandleEditing = async(id, title, director, status, platform, year, img, memo) => {
        let resp = await axios.put(`/api/movies/${id}`, {
            id:id,
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

    const HandleDelete = async(id) => {
        let resp = await axios.delete(`/api/movies/${id}`)
        console.log(resp);
    }

    return <div className="Content-detail">
        <TopBar/>
        <div className="content-info">
            <Input inputtitle={"Title"} value={contents.title} catchInput={(e)=>{
                setTitle(e.target.value)
            }}/>

        </div>
        <Memo />
        <Button onClick={()=>
            HandleEditing(id, title, director, status, platform, year, img, memo)
        } text={"Edit"} />

        <Link to='/main'><Button onClick={()=>
            HandleDelete(id)
        } text={"Delete"} />
        </Link>
    </div>
}

export default ContentInfo;