import React, {useState, useEffect} from 'react';
import TopBar from 'comps/Topbar';
import ContentBox from 'comps/ContentBox';
import axios from 'axios';

const Main = () => {
    const [content, setContent] = useState([]);
    useEffect(()=>{
        axios.get("/api/movies", {  
        })
        .then((response)=>{
            let arr = response.data.movies;
            let filtered = arr.filter(arr => arr.status === "false")
            setContent(response.data.movies)
            console.log(filtered)
        });
    }, [])
    return <div className="main">
        <TopBar/>
        
        <div className="contents-list">
        { content.map((i)=>{
            return (
                <ContentBox 
                title={i.title} 
                director={i.director}
                year={i.year}/>
            )
        })
        }
        </div>
    </div>
}

export default Main;