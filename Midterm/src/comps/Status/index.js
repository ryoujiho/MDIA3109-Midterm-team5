import React from 'react';
import styled from 'styled-components';

const StatusContainer = styled.div`
    width:110px;
    height:45px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius: 50px;
    color: #fff;
    font-family: roboto;
    font-weight: 500;
    background: ${({ bg }) => handleBG(bg)};
    box-shadow:${props => props.selected ? "inset 0px 0px 0px 2px #000" : "none"}; /* makes border insdie */
    `;

const handleBG = bg => {
    switch (bg) {
        case "watched":
            return "linear-gradient(90deg, #FF4752 10.09%, #C348FF 93.58%)";
        case "watching":
            return "linear-gradient(90deg, #C347FF 6.42%, #4A53FF 91.74%)";
        case "waiting":
            return "linear-gradient(90deg, #FF7347 10.09%, #FF4874 91.74%)";
        default:
            return "#3E3E3E";
    }
}


const Status = ({bg, selected, text, onClick}) => {
    return <div onClick={onClick}> 
    <StatusContainer selected={selected} bg={bg}> 
        <p>{text}</p>
    </StatusContainer>
    </div>
}

Status.defaultProps = {
    text: "status",
    selected: false
}

export default  Status;