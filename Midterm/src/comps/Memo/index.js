import React from 'react';
import styled from 'styled-components';

const MemoContainer = styled.div`
   
`;


const Memo =() => {
    return <div> 
    <MemoContainer>
        <h3> Memo </h3>
        <p>Place holder text</p>
    </MemoContainer>
    </div>
}

Memo.defaultProps = {

}

export default Memo