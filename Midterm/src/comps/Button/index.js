import React from 'react';
import styled from 'styled-components';

const BtnContainer = styled.div`
    width:250px;
    height:50px;
`;


const Button =() => {
    return <BtnContainer>
        Button
    </BtnContainer>
}

Button.defaultProps = {

}

export default Button