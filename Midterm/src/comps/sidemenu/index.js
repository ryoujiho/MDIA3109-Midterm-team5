import React from 'react';
import styled from 'styled-components';

const SideMenuContainer = styled.div`
    width:250px;
    height:500px;
    background-image: linear-gradient(180deg, #C345FF, #0057FF);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
`;

const MenuCategoy = styled.h3`
    color:#fff;
`;

const MenuList = styled.ul`
    list-style-type: none;
    color:#fff;
`;

const ListOption = styled.li`
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

const Sidemenu =(list) => {
    return <SideMenuContainer>
        <MenuCategoy>Status</MenuCategoy>
        <MenuList>
            <ListOption>Watched</ListOption>
            <ListOption>Watching</ListOption>
            <ListOption>Stopped</ListOption>
            <ListOption>Waiting</ListOption>
        </MenuList>
        <MenuCategoy>Platform</MenuCategoy>
        <MenuList>
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