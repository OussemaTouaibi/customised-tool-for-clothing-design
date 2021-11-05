import React, { Component, useContext } from 'react';
import './header.styles.scss';
import { menuitems } from './menuitems';
import { Button } from '../button/Button';
import { Link } from 'react-router-dom';


class Header extends Component{
    

state = {clicked: false}
handleClick=() => {
    this.setState({ clicked : !this.state.clicked})
}
    render(){
     
    return (
        
        <nav className="NavbarItems" style={{zIndex:"1000"}}>
            <h1 className="navbar-logo"> NO NAME.</h1>
            
            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                
                {menuitems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className="item.cName" href={item.url}>
                                {item.title}
                            </a>
                            </li>
                    )
                })}
                
            </ul>
        
            <Link to="/signup">
            <Button>Sign Up</Button>
            </Link>
            <Link to="/login">
            <Button>Log In</Button>
            </Link>
        </nav>
    );
}
}
export default Header;