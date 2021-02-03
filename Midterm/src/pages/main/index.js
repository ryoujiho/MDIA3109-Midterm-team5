import React, {useState, useEffect} from 'react';
import TopBar from 'comps/Topbar';
import ContentBox from 'comps/ContentBox';
import axios from 'axios';


const Main = () => {
    const [content, setContent] = useState([]);
    const [watched, setWatched] = useState("");
    const [watching, setWatching] = useState("");
    const [stopped, setStopped] = useState("");
    const [waiting, setWaiting] = useState("");
    const [reset, onReset] = useState("");
    const [statusWatched, setStatusWatched] = useState([]);
    const [statusWatching, setStatusWatching] = useState([]);
    const [statusStopped, setStatusStopped] = useState([]);
    const [statusWaiting, setStatusWaiting] = useState([]);
    const [movieList, setMovieList] = useState([]);

    let filtered;
    
    useEffect(()=>{
        axios.get("/api/movies", {  
        })
        .then((response)=>{
            let arr = response.data.movies;
            setMovieList(...[response.data.movies]);
            console.log(movieList);
            filtered = movieList.filter(arr => arr.status !== "false")
            let Watched = arr.filter(arr => arr.status === "watched")
            let Watching = arr.filter(arr => arr.status === "watching")
            let Stopped = arr.filter(arr => arr.status === "stopped")
            let Waiting = arr.filter(arr => arr.status === "waiting")
            setContent(filtered)
            setStatusWatched(Watched)
            setStatusWatching(Watching)
            setStatusStopped(Stopped)
            setStatusWaiting(Waiting)
        });
    }, [])

    return <div className="main">
        <TopBar onWatched={()=>{
            setWatched(true)
            console.log(watched);
        }}
        onWatching={()=>{
            setWatching(true)
            console.log(watching);
        }}

        onStopped={()=>{
            setStopped(true)
            console.log(stopped);
        }}

        onWaiting={()=>{
            setWaiting(true)
            console.log(waiting);
        }}

        // onReset={()=>{
        //     setReset
        // }
        // }
        />
        <div className="contents-list">
            {filtered.map(i=>{
                return  <ContentBox 
                title={i.title} 
                director={i.director}
                year={i.year}/>
            })}
            {/* {watched
            ?
            statusWatched.map((i)=>{
                return (
                    <ContentBox 
                    title={i.title} 
                    director={i.director}
                    year={i.year}/>
                )
            })
            :
            content.map((i)=>{
                return (
                    <ContentBox 
                    title={i.title} 
                    director={i.director}
                    year={i.year}/>
                )
            })
            }
             */}
            {/* {watching
            ?
            statusWatching.map((i)=>{
                return (
                    <ContentBox 
                    title={i.title} 
                    director={i.director}
                    year={i.year}/>
                )
            })
            :
            content.map((i)=>{
                return (
                    <ContentBox 
                    title={i.title} 
                    director={i.director}
                    year={i.year}/>
                )
            })} */}

        {/* {waiting
            ?
            statusWaiting.map((i)=>{
                return (
                    <ContentBox 
                    title={i.title} 
                    director={i.director}
                    year={i.year}/>
                )
            })
            :
            content.map((i)=>{
                return (
                    <ContentBox 
                    title={i.title} 
                    director={i.director}
                    year={i.year}/>
                )
            })} */}

        {/* {stopped
            ?
            statusStopped.map((i)=>{
                return (
                    <ContentBox 
                    title={i.title} 
                    director={i.director}
                    year={i.year}/>
                )
            })
            :
            content.map((i)=>{
                return (
                    <ContentBox 
                    title={i.title} 
                    director={i.director}
                    year={i.year}/>
                )
            })} */}
        </div>
    </div>
}

export default Main;