import React from 'react';
import styled from 'styled-components';

const StatusContainer = styled.div`
    width:110px;
    height:45px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius: 50px;
    background: ${props => props.theme.status};
`;

const theme = {
    status: "linear-gradient(90deg, #C347FF 6.42%, #4A53FF 91.74%)"
};

const watched = {
    status: "linear-gradient(90deg, #FF4752 10.09%, #C348FF 93.58%);"
}

const waiting = {
    status: "linear-gradient(90deg, #FF7347 10.09%, #FF4874 91.74%);"
}

const stopped = {
    status: "#3E3E3E;"
}


const Status = () => {
    return <div> 
    <StatusContainer theme={theme}> 
        <p>Status</p>
    </StatusContainer>
    <StatusContainer theme={watched}> 
        <p>Status</p>
    </StatusContainer>
    <StatusContainer theme={waiting}> 
        <p>Status</p>
    </StatusContainer>
    <StatusContainer theme={stopped}> 
        <p>Status</p>
    </StatusContainer>
    </div>
}

Status.defaultProps = {

}

export default Status