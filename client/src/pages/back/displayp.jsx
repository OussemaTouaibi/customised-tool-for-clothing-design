import React, { useState } from 'react';
import {  BrowserRouter as Router } from 'react-router-dom';
//import logo from './logo.svg';
import './admin-page.styles.scss';
import SideBar from '../../components/Back/layout/sidebar/SideBarMenu'
import { GlobalAppContext } from '../../components/Back/context';
import Viewprototypes from '../../components/Back/layout/main/viewprototypes'


function Displayp() {
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

          <Viewprototypes />
        </div>
      </GlobalAppContext.Provider>
    </Router>
  );
}

export default Displayp;