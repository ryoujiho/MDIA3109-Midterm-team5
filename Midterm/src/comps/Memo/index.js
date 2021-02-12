import React from 'react';
import styled from 'styled-components';

const MemoContainer = styled.div`
`;

const MemoText = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size:16px;
    color: #000000;
    margin:20px 0px;
`
const MemoInput = styled.textarea`
    border-bottom:gray 1px solid;  
    width:100%;
    max-width:320px;
    padding:5px;
`

const Memo =({placeholder, catchMemo}) => {

    return <MemoContainer>
       <MemoText>Memo</MemoText>
       <MemoInput rows="4" cols="40" type='text' 
       defaultValue={placeholder} onChange={catchMemo}></MemoInput>

    </MemoContainer>
}

Memo.defaultProps = {
   placehodler:"leave memo"
}

export default Memo