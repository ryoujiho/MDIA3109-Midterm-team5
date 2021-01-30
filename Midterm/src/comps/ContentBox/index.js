import React from 'react';
import styled from 'styled-components';

const ContentCont = styled.div`
    width:86%;
    height:125px;
    max-height:300px;
    border: 1px solid grey;
    display:flex
`;

const ConImg = styled.div `
    width:40%;
    background-image: url ("");
    background-color: grey;
`;

const Condetail = styled.div`
    width:60%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    h3 {
        margin:0;
    }
`;


const ContentBox =() => {
    return <ContentCont>
        <ConImg/>
        <Condetail>
            <h3>Title</h3>
            <span>Director</span>
            <span>Year</span>
        </Condetail>
    </ContentCont>
}

ContentBox.defaultProps = {

}

export default ContentBox