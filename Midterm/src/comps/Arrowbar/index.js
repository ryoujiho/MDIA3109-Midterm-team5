import React, {useState} from 'react';
import styled from 'styled-components';
import Sidemenu from 'comps/sidemenu';

const ArrowbarContainer = styled.div`
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

const Arrow = styled.div`
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



const Arrowbar =({}) => {
    const [openMenu, setOpenMenu] = useState(false);
    return <ArrowbarContainer>
        <Arrow onClick={()=>{
            setOpenMenu(!openMenu);
        }}>
            <img src="Arrow(back).png"/>
        </Arrow>
        
        <Settings>
            <img src="settings.png" />
        </Settings>

        <MenuWrapper openMenu={openMenu}>
            <Sidemenu onClick={()=>{
            setOpenMenu(!openMenu);
        }}/>
        </MenuWrapper>

    </ArrowbarContainer>
}

Arrowbar.defaultProps = {

}

export default Arrowbar