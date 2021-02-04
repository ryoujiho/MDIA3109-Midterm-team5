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
    margin:10px 0px;

`;


const Button = ({text, onClick}) => {
    return <div onClick={onClick}>
    <BtnContainer>
        <p> {text} </p>
    </BtnContainer>
    </div> 
}

Button.defaultProps = {
    text: "defaultButton"
}

export default Button