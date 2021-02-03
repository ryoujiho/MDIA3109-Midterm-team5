import React from 'react';
import styled from 'styled-components';

const MemoContainer = styled.div`
`;

const MemoText = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 23px;
color: #000000;
margin:10px 0px;
`
const MemoInput = styled.input`
border: none;
border-bottom:gray 1px solid;  
`


const Memo =({border, catchMemo}) => {
    return <MemoContainer>
       <MemoText>Year</MemoText>
       <MemoInput type='text' placeholder='Leave Memo' size='50' onChange={catchMemo}></MemoInput>
    </MemoContainer>
}

Memo.defaultProps = {
   
}

export default Memo