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
        let resp = await axios.get("/api/movies/filter/nothing");
        setfinalMovie(...[resp.data.movies])
        console.log(finalMovie)
    }

    const HandleFilter = async(status) => {
        let resp = await axios.get(`/api/movies/filter/${status}`);
        setfinalMovie(...[resp.data.movies])
        console.log(finalMovie)
    }

    const HandlePlatforms = async(platform) => {
        let resp = await axios.get(`/api/movies/platform/${platform}`);
        setfinalMovie(...[resp.data.movies])
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
           HandleFilter("watched");
           setHeader("Watched")
        }}
        onWatching={()=>{
            HandleFilter("watching");
            setHeader("Watching")
        }}

        onStopped={()=>{
            HandleFilter("stopped");
            setHeader("Stopped")
        }}

        onWaiting={()=>{
            HandleFilter("waiting");
            setHeader("Waiting")
        }}
        
        netflix={()=>{
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
                        img={o.img}
                        title={o.title} 
                        director={o.director}
                        year={o.year}/>
                </Link>
            })}
        </div>
    </div>
}

export default Main;