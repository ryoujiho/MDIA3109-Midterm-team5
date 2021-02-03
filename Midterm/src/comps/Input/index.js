import React from 'react';
import styled from 'styled-components';


const InputCont = styled.div`
    width: 100%;
    border:1px solid #000;
    padding:20px 0px;
`;

const InputTitle = styled.span`
    text-size:14px;
`;

const InputThing = styled.input`
    width:100%;
    padding:20px 0px
`;

const InputComp = ({inputtitle, catchInput}) => {
    return <InputCont>
        <InputTitle>{inputtitle}</InputTitle>
        <InputThing onChange={catchInput}/>
    </InputCont>
}

InputComp.defaultProps = {
    inputtitle:"inputtitle"
}

export default InputComp