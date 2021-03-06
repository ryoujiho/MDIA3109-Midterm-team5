import React from 'react';
import styled from 'styled-components';


const InputCont = styled.div`
    width: 100%;
    max-width: 90%;
    padding:10px 0px;
`;

const InputTitle = styled.h2`
    font-size:16px;
`;

const InputThing = styled.input`
    width:100%;
    max-width:320px;
    padding:10px 0px;
    outline:none;

    input:focus{
    outline:none;
    }
`;

const InputComp = ({inputtitle, catchInput, value}) => {
    return <InputCont>
        <InputTitle>{inputtitle}</InputTitle>
        <InputThing onChange={catchInput} defaultValue={value}/>
    </InputCont>
}

InputComp.defaultProps = {
    inputtitle:"Input Title"
}

export default InputComp