import React from 'react';
import styled from 'styled-components';

const StatusContainer = styled.div`
    width:110px;
    height:45px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius: 50px;
    color : ${props => props.color ? props.color : "white "};
    font-family: roboto;
    font-weight: 500;

    background: ${({ bg }) => handleBG(bg)};

    border: ${props => props.border ? props.border : "3px black solid"};
`;

const handleBG = bg => {
    switch (bg) {
        case "apple":
            return "#363636";
        case "disney":
            return "#0E47A1";
        case "youtube":
            return "#FF0000";
        case "amazon":
            return "#A0CCFF";
        case "hulu":
            return "#1CE783";
        case "netflix":
            return "#FF0000";
        default:
            return "black";
    }
}


const Plateform = ({bg, border, text, color, onClick}) => {
    return <div onClick={onClick}> 
    <StatusContainer color={color} border={border} bg={bg}> 
        <p>{text}</p>
    </StatusContainer>
    </div>
}

Plateform.defaultProps = {
    border: "none",
    text: "status",
    color: "white"
}

export default  Plateform;