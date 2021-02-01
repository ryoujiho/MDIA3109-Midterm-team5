import React from 'react';
import styled from 'styled-components';

const BtnContainer = styled.div`
    width:250px;
    height:50px;
    background: red;
    align-items:center;
    justify-content: center;
    display: flex;

    font-family: roboto;
    font-width: 600;
`;


const Button =() => {
    return <BtnContainer>
        Button
    </BtnContainer>
}

Button.defaultProps = {

}

export default Button