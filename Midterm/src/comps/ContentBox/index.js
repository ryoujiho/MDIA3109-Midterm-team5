import React from 'react';
import styled from 'styled-components';


const ContentCont = styled.div`
    width:90%;
    position: relative;
    min-height:150px;
    max-height: 150px;
    border: 1px solid grey;
    display:flex;
    margin-bottom: 20px;
    background-image: linear-gradient(
        90deg, 
        rgba(255,255,255,1) 0%, 
        rgba(255,255,255,1) 100%
        );
    z-index: 1;

    :before{
        position: absolute;
        content: "";
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: linear-gradient(
          -120deg,
          hsl(280, 75%, 50%),
          hsl(237, 75%, 40%)
        );
        z-index: -1;
        transition: opacity 0.5s linear;
        opacity: 0;
    }

:hover {
    h3{
        color:white;
    }
    span{
        color: white;
    }
}

    :hover::before{
            opacity:1;
    }
`;

const ConImg = styled.div `
    width:40%;
    max-height:150px;
    background-color: grey;

    img {
        width: 100%;
        height: 100%;
        max-height:100%;
        object-fit:cover;
    }
`;

const Condetail = styled.div`
    width:60%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    font-family: roboto;

    h3 {
        font-size: 18px;
        color: #242424;
        transition: color 1s;
    }
    span {
        font-size: 13px;
        color: #242424;
        transition: color 1s;

    }
    
`;


const ContentBox =({img, title, director, year}) => {
    return <ContentCont>
        <ConImg>
            <img src={img} />
        </ConImg>
        <Condetail>
            <h3>{title}</h3>
            <span>{director}</span>
            <span>{year}</span>
        </Condetail>
    </ContentCont>
}

ContentBox.defaultProps = {
    title: "title",
    director: "director",
    year: "year",
    img: null
}

export default ContentBox