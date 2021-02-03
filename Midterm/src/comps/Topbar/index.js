import React, {useState} from 'react';
import styled from 'styled-components';
import Sidemenu from 'comps/sidemenu';

const TopBarContainer = styled.div`
    width:100%;
    max-height:500px;
    height:80px;
    border-bottom:1px solid #000;
    display:flex;
    justify-content:space-between;
    align-items:center;
    box-shadow: 0px 6px 7px 3px rgba(0,0,0,0.10);
    position:relative;
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

const MenuWrapper = styled.div`
    position:absolute;
    z-index:99;
    left: ${props=>props.openMenu ? "0px" : "-320px"};
    top:0;
    transition:0.4s all ease;
    height:100vh;
`;



const TopBar =({onWatched, onWatching, onStopped, onWaiting, onReset}) => {
    const [openMenu, setOpenMenu] = useState(false);
    return <TopBarContainer>
        <Hamburger onClick={()=>{
            setOpenMenu(!openMenu);
        }}>
            <img src="Hamburger_Menu.png"/>
        </Hamburger>
        
        <Settings>
            <img src="settings.png" />
        </Settings>

        <MenuWrapper openMenu={openMenu}>
            <Sidemenu 
            onWatched={onWatched} 
            onWatching={onWatching} 
            onStopped={onStopped} 
            onWaiting={onWaiting} 
            onReset={onReset}
            
            onClick={()=>{
            setOpenMenu(!openMenu);
        }}/>
        </MenuWrapper>

    </TopBarContainer>
}

TopBar.defaultProps = {

}

export default TopBar