import React from 'react';
import styled from 'styled-components';

const SideMenuContainer = styled.div`
    width:250px;
    height:100%;
    background-color:#FAD // just to see
`;

const MenuList = styled.ul`

`;

const Reset = styled.button`
`;

const AddBtn = styled.div`
`;

const Sidemenu =() => {
    return <SideMenuContainer>
        <MenuList>
            <li>Option</li>
            <li>Option</li>
            <li>Option</li>
        </MenuList>
        <Reset />
        <AddBtn />
    </SideMenuContainer>
}

Sidemenu.defaultProps = {

}

export default Sidemenu