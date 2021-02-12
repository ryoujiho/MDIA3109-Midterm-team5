import React, {useState, useEffect} from 'react';
import TopBar from 'comps/Topbar';
import ContentBox from 'comps/ContentBox';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  


const Main = () => {

    const [finalMovie, setfinalMovie] = useState([]);
    const [header, setHeader] = useState('');

    const HandleMovies = async() => {
        let resp = await axios.get("/api/movies");
        setfinalMovie(...[resp.data.movies])
        console.log(finalMovie)
    }

    const HandleFilter = async(status) => {
        let resp = await axios.get(`/api/movies/status/${status}`);
        setfinalMovie(...[resp.data.result])
        console.log(resp.data.result)
        console.log(finalMovie)
    }

    const HandlePlatforms = async(platform) => {
        let resp = await axios.get(`/api/movies/platform/${platform}`);
        setfinalMovie(...[resp.data.result])
        console.log(finalMovie)
    }

    const HeaderReset = () => {
        setHeader("");
    }

    useEffect(()=>{
        HandleMovies()
    }, [])

    return <div className="main">
        <TopBar header={header} onWatched={()=>{
           HandleFilter("Watched");
           setHeader("Watched")
        }}
        onWatching={()=>{
            HandleFilter("Watching");
            setHeader("Watching")
        }}

        onStopped={()=>{
            HandleFilter("Stopped");
            setHeader("Stopped")
        }}

        onWaiting={()=>{
            HandleFilter("Waiting");
            setHeader("Waiting")
        }}
        
        netflix={()=>{
            console.log("....^_^", finalMovie);
            HandlePlatforms("Netflix");
            setHeader("Netflix")
        }}

        disney={()=>{
            HandlePlatforms("Disney+");
            setHeader("Disney+")
        }}

        hulu={()=>{
            HandlePlatforms("Hulu");
            setHeader("Huju")
        }}

        amazon={()=>{
            HandlePlatforms("Amazon");
            setHeader("Amazon Prime")
        }}

        onReset={()=>{
            HandleMovies()
            HeaderReset()
        }
        }
        />
        <div className="contents-list">
            {finalMovie && finalMovie.map(o=>{
                return  <Link 
                style={{ textDecoration: 'none'}} to={{ pathname: "/ContentDetail", state: {o} }}>
                    <ContentBox 
                        img={o.Img}
                        title={o.title} 
                        director={o.director}
                        year={o.year}/>
                </Link>
            })}
        </div>
    </div>
}

export default Main;