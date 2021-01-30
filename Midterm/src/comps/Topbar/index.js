import React from 'react';
import styled from 'styled-components';

const TopBarContainer = styled.div`
    width:100%;
    max-height:500px;
    height:80px;
    border-bottom:1px solid #000;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

const Hamburger = styled.div`
    margin-left:10px;
    width: 30px;
    img {
        width:100%;
    }
`;

const Settings = styled.div`
    margin-right:10px;
    width:30px;

    img {
        width:100%;
        height:auto;
    }
    `;

const TopBar =() => {
    return <TopBarContainer>
        <Hamburger><img src="Hamburger_Menu.png"/></Hamburger>
        
        <Settings><img src="settings.png" /></Settings>
    </TopBarContainer>
}

TopBar.defaultProps = {

}

export default TopBar