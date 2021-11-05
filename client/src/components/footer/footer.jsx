import React from 'react';
import './footer.styles.scss';
import { Button } from '../button/Button';
import { Link } from 'react-router-dom';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/'>How it works</Link>
                    </div>
          
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Sponsorships</Link>
                        <Link to='/'>partnerships</Link>
                    </div>
             
            
                    <div className="footer-link-items">
                        <h2>Events</h2>
                        <Link to='/'></Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                    </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link className="social-logo">
                            {/* Logo will be here*/}
                        </Link>
                    </div>
                    <small className="website-rights">NoName © {year} All rights reserved. </small>
                <div className="social-icons">
                    
                            <Link 
                            className="social-icon-link facebook" 
                            to='/' target='_blank' 
                            aria-label='Facebook'>
                            <i className="fab fa-facebook-f"></i>
                    </Link>

                    <Link 
                            className="social-icon-link instagram" 
                            to='/' target='_blank' 
                            aria-label='Instagram'>
                             <i className="fab fa-instagram"></i>
                    </Link>
                    <Link 
                            className="social-icon-link twitter" 
                            to='/' target='_blank' 
                            aria-label='Twitter'>
                             <i className="fab fa-twitter"></i>
                    </Link>
                    <Link 
                            className="social-icon-link youtube" 
                            to='/' target='_blank' 
                            aria-label='Youtube'>
                             <i className="fab fa-youtube"></i>
                    </Link>
                </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;