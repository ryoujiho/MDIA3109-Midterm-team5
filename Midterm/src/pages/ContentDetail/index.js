import React, {useState} from 'react';
import TopBar from 'comps/Topbar';
import Button from 'comps/Button';
import Memo from 'comps/Memo';
import Input from 'comps/Input';
import Status from 'comps/Status';
import Platform from 'comps/Platform';
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
    const [title, setTitle] = useState(contents.title);
    const [memo, setMemo] = useState(contents.memo);

    const HandleEditing = async(id, title, memo) => {
        let resp = await axios.put(`/api/movies/${id}`, {
            id:id,
            title: title,
            memo:memo
        })
        console.log(resp);
    }

    const HandleDelete = async(id) => {
        let resp = await axios.delete(`/api/movies/${id}`)
        console.log(resp);
    }
    return <div className="Content-detail">
        <TopBar header={"Edit Content"}/>
        <div className="status-platform">
                <Status bg={contents.status} text={contents.status}/>
                <Platform bg={contents.platform} text={contents.platform}/>
            </div>
            <div className="content-info">
                <Input inputtitle={"Title"} value={contents.title} catchInput={(e)=>{
                    setTitle(e.target.value)
                }}/>
                <Memo placeholder={contents.memo} catchMemo={(e)=>{
                    setMemo(e.target.value)
                }}/>
            </div>
            <div className="buttons">
                <Link to='/main'>
                    <Button onClick={()=>
                        HandleEditing(id, title, memo)
                    } text={"Edit"} />
                </Link>

                <Link to='/main'><Button onClick={()=>
                    HandleDelete(id)
                } text={"Delete"} />
                </Link>
            </div>
    </div>
}

export default ContentInfo;