import React, {Component} from 'react';
import { withRouter, Link } from 'react-router-dom'

import './header.css';

import Logo from '../assets/logo.svg';
import cons from '../assets/website_cons.svg';
import csess from '../assets/website_csess.svg';

class Header extends Component{
    render(){
        let isHome = (this.props.location.pathname === '/');
        return (
            <div className={`box-header ${isHome?'tall':''}`}>
                <Link to="/" className="logo"><img src={Logo} alt="CSESS, HKUSTSU" /></Link>
                <div className="header-social-media">
                    <a href="https://www.facebook.com/CSESSHKUSTSU" target="_blank" rel="noopener noreferrer">
                        <img src={require('../assets/fb-white.svg')} alt="Facebook"/>
                    </a>
                    <a href="https://www.instagram.com/csess.hkustsu/" target="_blank" rel="noopener noreferrer">
                        <img src={require('../assets/ig-white.svg')} alt="Instagram"/>
                    </a>
                    <a href="https://www.youtube.com/channel/UCo8N6zHE3oUme-9tkoJMJYQ" target="_blank" rel="noopener noreferrer">
                        <img src={require('../assets/yt-white.svg')} alt="Youtube"/>
                    </a>
                    <a href="https://medium.com/@ustcsess" target="_blank" rel="noopener noreferrer">
                        <img src={require('../assets/medium-white.svg')} alt="Medium"/>
                    </a>
                </div>
                <div className="csess" aria-selected="false"><img src={csess} alt="csess"/></div>
                <div className="cons" aria-selected="false"><img src={cons} alt="csess"/></div>
            </div>
        );
    }
}

export default withRouter(Header);
