import React, {useState, useEffect} from 'react';
import TopBar from 'comps/Topbar';
import ContentBox from 'comps/ContentBox';
import axios from 'axios';


const Main = () => {

    const [finalMovie, setfinalMovie] = useState([]);

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

    useEffect(()=>{
        HandleMovies()
    }, [])

    return <div className="main">
        <TopBar onWatched={()=>{
           HandleFilter("watched");
        }}
        onWatching={()=>{
            HandleFilter("watching");
        }}

        onStopped={()=>{
            HandleFilter("stopped");
        }}

        onWaiting={()=>{
            HandleFilter("waiting");
        }}
        
        netflix={()=>{
            HandlePlatforms("Netflix");
        }}

        disney={()=>{
            HandlePlatforms("Disney+");
        }}

        hulu={()=>{
            HandlePlatforms("Hulu");
        }}

        amazon={()=>{
            HandlePlatforms("Amazon");
        }}

        onReset={()=>{
            HandleMovies()
        }
        }
        />
        <div className="contents-list">
            {finalMovie && finalMovie.map(i=>{
                return  <ContentBox 
                title={i.title} 
                director={i.director}
                year={i.year}/>
            })}
        </div>
    </div>
}

export default Main;