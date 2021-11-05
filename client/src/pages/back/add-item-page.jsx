import React, { useState } from 'react';
import {  BrowserRouter as Router } from 'react-router-dom';
//import logo from './logo.svg';
import './admin-page.styles.scss';
import SideBar from '../../components/Back/layout/sidebar/SideBarMenu'
import { GlobalAppContext } from '../../components/Back/context';
import Additem from '../../components/Back/layout/main/Add-item';


function Dashboard() {
  const [toggled, setToggled] = useState(true);
  const [hasBackground, setHasBackground] = useState(true);
  let style = toggled ? "toggled" : "";
  style += hasBackground ? " sidebar-bg" : "";
  

  return (
    <Router>
      <GlobalAppContext.Provider
        value={{toggled, setToggled, hasBackground, setHasBackground}}  
      >
        <div className={"page-wrapper legacy-theme bg2 "+ style  }>
          <SideBar />

          <Additem />
        </div>
      </GlobalAppContext.Provider>
    </Router>
  );
}

export default Dashboard;