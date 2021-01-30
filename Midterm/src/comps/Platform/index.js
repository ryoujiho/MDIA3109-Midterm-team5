import React from 'react';
import styled from 'styled-components';

const PlatformContainer = styled.div`
    width:100px;
    height:auto;
    background-color: grey;
`;


const Platform =() => {
    return <PlatformContainer>
        Platform
    </PlatformContainer>
}

Platform.defaultProps = {

}

export default Platform