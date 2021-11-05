import * as s from './Dashboard.styles';
import * as Palette from '../../../colors'

// Components:
import Sidebar from '../../../components/Back/Sidebar/Sidebar';
import MainView from '../../../components/Back/MainView/MainView';
import PersistentDrawerLeft from '../../../components/Back/MainView/Nav/Nav'
import Footer from '../../../components/Back/MainView/Footer/Footer'
import React from 'react';


const Dashboard = () => {
    const backgroundImage = 'images/bga.jpg';
    const logo = 'images/logo.png';
    const SidebarHeader = {
        fullName: 'NoName.',
        shortName: 'NN'
    };
    const menuItems = [
        {name: 'Home', to: '/homeb', icon: 'icons/home.svg', subMenuItems: []},
        {name: 'Profile', to: '/profileb', icon: 'icons/profile.svg', subMenuItems: []},
        {name: 'Prototypes', to: '/prototypesb', icon: 'icons/prototype.svg', 
        subMenuItems: [
            { name: 'Add a prototype', to: '/add'},
            { name: 'Consult prototypes', to: '/consult'}
        ]}
    ];
    
    const fonts = {
        header: 'Frijole',
        menu: 'Poppins'
    }

    return (
        <s.App>
            <Sidebar
            
               backgroundImage={backgroundImage}
               SidebarHeader={SidebarHeader}
               menuItems={menuItems}
               fonts={fonts}
               colorPalette={Palette.preDark}
            />
            
            <MainView
            />
            <PersistentDrawerLeft/>
            <Footer/>
        </s.App>
        
    );
}

export default Dashboard;