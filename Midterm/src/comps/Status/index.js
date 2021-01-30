import React from 'react';
import styled from 'styled-components';

const StatusContainer = styled.div`
    width:100px;
    height:auto;
    background-color: grey;
`;


const Status =() => {
    return <StatusContainer>
        Status
    </StatusContainer>
}

Status.defaultProps = {

}

export default Status