import React, {useState} from 'react';
import styled from 'styled-components';

const SideMenuContainer = styled.div`
    width:180px;
    height:100%;
    background-image: linear-gradient(180deg, #C345FF, #0057FF);
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content:space-around;
    font-family: 'Roboto', sans-serif;
`;

const MenuCategoy = styled.h3`
    color:#fff;
`;

const MenuList = styled.ul`
    list-style-type: none;
    color:#fff;
    align-items:center;
    display:contents;
`;

const ListOption = styled.li`
    width:100%;
    font-weight:300;
    font-size:11pt;
    margin: -50px 0px;
    text-align:center;
    
`;

const Reset = styled.button`
    border:none;
    outline:none;
    background:transparent;
    color:#808080
`;

const AddBtn = styled.div`
width:20%;
    img {
        width:100%;
    }
`;

const Hamburger = styled.div`
    margin-left:10px;
    width: 30px;
    img {
        width:100%;
    }
`;

const Sidemenu =({onClick}) => {
    return <SideMenuContainer>
        <Hamburger onClick={onClick}>
            <img src="Hamburger_Menu.png"/>
        </Hamburger>
        <MenuList>
            <MenuCategoy>Status</MenuCategoy>
            <ListOption>Watched</ListOption>
            <ListOption>Watching</ListOption>
            <ListOption>Stopped</ListOption>
            <ListOption>Waiting</ListOption>
        </MenuList>
        <MenuList>
            <MenuCategoy>Platform</MenuCategoy>
            <ListOption>Netflix</ListOption>
            <ListOption>Disney+</ListOption>
            <ListOption>Hulu</ListOption>
            <ListOption>Amazon Prime</ListOption>
        </MenuList>
        <Reset>Reset</Reset>
        <AddBtn><img src="/add.png"/></AddBtn>
    </SideMenuContainer>
}

Sidemenu.defaultProps = {
}

export default Sidemenu