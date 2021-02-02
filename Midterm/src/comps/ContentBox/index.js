import React from 'react';
import styled from 'styled-components';


const ContentCont = styled.div`
    width:90%;
    height:150px;
    max-height:150px;
    border: 1px solid grey;
    display:flex;
    margin-bottom: 20px;
`;

const ConImg = styled.div `
    width:40%;
    height: 100%;
    background-color: grey;

    img {
        width: 100%;
        height: 100%;
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
    }
    span {
        font-size: 13px;
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