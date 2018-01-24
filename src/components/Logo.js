import React, { Component } from 'react';

export default class Logo extends Component {
    render() {
        return (
            <div style={logoStyle}>SEAN D KIM</div>
        );
    }
}

const logoStyle = {
    position: 'absolute',
    left: '50px',
    top: '50px',
    zIndex: 1,

    color: 'white',
    fontFamily: 'Montserrat',
    fontWeight: 'light',
    fontSize: '20px',
    letterSpacing: '8px',
}