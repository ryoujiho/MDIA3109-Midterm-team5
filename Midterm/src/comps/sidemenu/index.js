import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

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
    cursor: default;
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
    cursor:pointer;
    width:100%;
    font-weight:300;
    font-size:11pt;
    margin: -40px 0px;
    text-align:center;  
`;

const Reset = styled.button`
    cursor:pointer;
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

const Icons = styled.div`
    width:100%;
    display:flex;
    justify-content:space-around;
`;

const Icon = styled.div`
cursor:pointer;
    width: 25px;

    a {
        width: 30px;

        img {
            width:100%;
        }
    }

    img {
        width:100%;
    }
`;


const Sidemenu =({onClick, onWatched, onWatching, onStopped, onWaiting, onReset, netflix, disney, hulu, amazon}) => {
    return <SideMenuContainer>
        <Icons>
            <Icon onClick={onClick}>
                <Link to='/Main'><img src="/home.png"/></Link>
            </Icon>
            <Icon onClick={onClick}>
                <img src="/close.png"/>
            </Icon>
        </Icons>
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
        <AddBtn><Link to='/AddingContent'><img src="Add.png"/></Link></AddBtn>
    </SideMenuContainer>
}

Sidemenu.defaultProps = {
}

export default Sidemenu