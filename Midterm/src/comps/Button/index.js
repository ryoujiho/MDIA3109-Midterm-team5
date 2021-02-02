import React from 'react';
import styled from 'styled-components';

const BtnContainer = styled.div`
    width:250px;
    height:50px;
    align-items:center;
    justify-content: center;
    display: flex;

    border: solid black 3px;

    font-family: roboto;
    font-width: 600;
`;


const Button = ({text}) => {
    return <div>
    <BtnContainer>
        <p> {text} </p>
    </BtnContainer>
    </div> 
}

Button.defaultProps = {
    text: "defaultButton"
}

export default Button