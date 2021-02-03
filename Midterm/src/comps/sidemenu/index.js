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
    margin-bottom:-20px;
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
    margin: -40px 0px;
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

const Close = styled.div`
    margin-left:10px;
    width: 30px;
    img {
        width:100%;
    }
`;

const Sidemenu =({onClick, onWatched, onWatching, onStopped, onWaiting, onReset, netflix, disney, hulu, amazon}) => {
    return <SideMenuContainer>
        <Close onClick={onClick}>
            <img src="/close.png"/>
        </Close>
        <MenuList>
            <MenuCategoy>Status</MenuCategoy>
            <ListOption onClick={onWatched}>Watched</ListOption>
            <ListOption onClick={onWatching}>Watching</ListOption>
            <ListOption onClick={onStopped}> Stopped</ListOption>
            <ListOption onClick={onWaiting}>Waiting</ListOption>
        </MenuList>
        <MenuList>
            <MenuCategoy>Platform</MenuCategoy>
            <ListOption onClick={netflix}>Netflix</ListOption>
            <ListOption onClick={disney}>Disney+</ListOption>
            <ListOption onClick={hulu}>Hulu</ListOption>
            <ListOption onClick={amazon}>Amazon Prime</ListOption>
        </MenuList>
        <Reset onClick={onReset}>Reset</Reset>
        <AddBtn><img src="Add.png"/></AddBtn>
    </SideMenuContainer>
}

Sidemenu.defaultProps = {
}

export default Sidemenu