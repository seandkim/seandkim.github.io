import React, { Component } from 'react';
import '../styles/Nav.css';

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.pages = ['about me', 'projects', 'big fish'];
        this.state = {
            currentPage: 'about me',
            focused: false, // whether content has been focused (which shrinks the nav)
        }
    }

    render() {
        const { currentPage, focused } = this.state;
        const tabs = []
        for (var i=0; i<this.pages.length; i++) {
            const thisPage = this.pages[i];
            let thisTabStyle = { ...menuTabStyle };
            if (i === this.pages.indexOf(currentPage)) {
                thisTabStyle['textDecoration'] = 'underline';
            }
            tabs.push(<div style={thisTabStyle} key={i}>{thisPage}</div>)
        }

        return (
            <div className="Nav" style={ menuWrapperStyle }>
                { tabs }
            </div>
        );
    }
}

const menuWrapperStyle = {
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
}

const menuTabStyle = {
    fontFamily: 'Roboto',
    fontSize: '25px',
    margin: '1vh',
}