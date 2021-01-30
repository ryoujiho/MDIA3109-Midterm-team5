import React from 'react';
import Sidemenu from 'comps/sidemenu';
import TopBar from 'comps/Topbar';
import ContentBox from 'comps/ContentBox';

const Main = () => {
    return <div className="main">
        <TopBar/>
        
        <div className="contents-list">
        <ContentBox />
        </div>
    </div>
}

export default Main;