import React, { Component } from 'react';
import aboutCover from '../images/cover/about.png'
import '../styles/Nav.css';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.pages = ['about me', 'projects', 'big fish'];
        this.state = {
            currentPage: 'about me',
            focused: false, // whether content has been focused (which shrinks the nav)
        }
    }

    render() {
        return (
            <div className="about-image" style={wrapperStyle}>
                <div style={menuWrapperStyle}>
                    <div>about me</div>
                    <div>projects</div>
                    <div>big fish</div>
                </div>
            </div>
        );
    }
}

const wrapperStyle = {
    width: '50vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
}

const menuWrapperStyle = {
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
}

export default Nav;
