import React, { useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import SideBarConfig from './MenuConfig';

import DropdownMenu from './DropdownMenu';
import SimpleMenu from './SimpleMenu';
import Dropdown from 'react-bootstrap-dropdown-menu';
import userImage from '../../images/user.jpg';

let renderCustomHorizontalThumb = ({ style, ...props }) => {
                        
    const thumbStyle = {
        backgroundColor: `rgba(255,255,255,0.3)`,
        width:'4px',
        right:'-2px'
    };
    return (
        <div
            style={{ ...style, ...thumbStyle }}
            {...props}/>
    );
}




function SideBarMenu() {

    let initialMenuItems = [];
    SideBarConfig.menus.forEach( (menu, index) => {
        let active = menu.active ? menu.active : false;
        initialMenuItems.push({
            active:active
        });
    });

    
    const [menuItems , setMenuItems] = useState(initialMenuItems);
    
    const handleMenuDropDownClick = (e,index) => {
        let newArray = menuItems.map( ( item, idx ) => {
            // check if index equal to current clicked so put inverse value otherwise set to false (collapse other menu)
            (index === idx) ? item.active = !item.active : item.active = false;
            return item;
        });
        setMenuItems([
            ...newArray
        ]);
    }
    
    const renderSideBarMenuItem = () => {
        return !SideBarConfig["menus"].length ? "" : (
            
            SideBarConfig.menus.map( (menu , index ) => {
                
                let liElementList = "";
                if (menu.type === 'header') {
                    liElementList = <li className="header-menu" ><span>{menu.title }</span></li>;
                }else if(menu.type === 'dropdown' ) {
                    liElementList = <DropdownMenu menu={menu}  active={menuItems[index].active} key={"sidebar"+index} handleClick={(e) => handleMenuDropDownClick(e,index) } />;
                } else if(menu.type === 'simple' ) {
                    liElementList =  <SimpleMenu  menu={menu} />;
                }
                return liElementList;
            })
            
            
        )
    }


    return (
        <nav id="sidebar" className="sidebar-wrapper">
            <div className="sidebar-content">
                <Scrollbars
                    renderThumbVertical={ renderCustomHorizontalThumb }>
                    <div className="sidebar-item sidebar-brand">
                        <a href="#/header">No Name.</a>
                    </div>
                    <div className="sidebar-item sidebar-header d-flex flex-nowrap">
                        <div className="user-pic">
                            <img className="img-responsive img-rounded" src={userImage} alt="User " />
                        </div>
                        <div className="user-info">
                            <span className="user-name">NoName 
                                <strong> </strong>
                            </span>
                            <span className="user-role"> Administrator</span>
                            <span className="user-status">
                                <i className="fa fa-circle"></i>
                                <span> Online</span>
                            </span>
                        </div>
                    </div>
                    
                    <div className=" sidebar-item sidebar-menu">
                         <ul>
                           {renderSideBarMenuItem()}
                        </ul>
                    </div>
                </Scrollbars>
            </div>
            <div className="sidebar-footer">
              
                <div>
                    <a href="#toremove">
                        <i className="fa fa-power-off"></i>
                    </a>
                </div>
                
            </div>
        </nav>
    )
}

export default SideBarMenu;
