import React from 'react';
import styled from 'styled-components';

const StatusContainer = styled.div`
    width:110px;
    height:45px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius: 50px;
    color : ${props => props.color};
    box-shadow:${props => props.selected};
    font-family: roboto;
    font-weight: 500;
    background: ${({ bg }) => handleBG(bg)};
    margin:0px 0px 5px 0px;
`;

const handleBG = bg => {
    switch (bg) {
        case "Apple":
            return "#363636";
        case "Disney+":
            return "#0E47A1";
        case "Youtube":
            return "#FF0000";
        case "Amazon":
            return "#A0CCFF";
        case "Hulu":
            return "#1CE783";
        case "Netflix":
            return "#FF0000";
        default:
            return "black";
    }
}


const Plateform = ({bg, text, color, onClick, selected}) => {
    return <div onClick={onClick}> 
    <StatusContainer selected={selected} color={color} bg={bg}> 
        <p>{text}</p>
    </StatusContainer>
    </div>
}

Plateform.defaultProps = {
    border: "none",
    text: "Platform",
    color: "white"
}

export default  Plateform;