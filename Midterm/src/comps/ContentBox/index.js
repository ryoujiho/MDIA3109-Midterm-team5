import React from 'react';
import styled from 'styled-components';


const ContentCont = styled.div`
    width:60%;
    height:auto;
    // max-height:300px;
    border: 1px solid grey;
    display:flex
`;

const ConImg = styled.div `
    width:40%;
    height: auto;
    background-color: grey;

    img {
        width: 100%;
        height: auto;
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
        margin-top: 10px;
        font-size: 36px;
    }
    span {
        font-size: 28px;
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
    year: "year"
}

export default ContentBox