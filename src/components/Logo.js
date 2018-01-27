import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Logo extends Component {
    render() {
        let customStyle;
        switch (this.props.align) {
            case 'center':
                customStyle = { 'left': '0px', 'right': '0px', 'textAlign': 'center' };
                break;
            case 'left':
            default:
                customStyle = { 'left': '50px' };
                break;
        }

        return (
            <div style={{ ...logoStyle, ...customStyle }}>SEAN D KIM</div>
        );
    }
}

Logo.propTypes = {
    align: PropTypes.string
};

const logoStyle = {
    position: 'absolute',
    top: '50px',
    zIndex: 1,

    color: 'white',
    fontFamily: 'Montserrat',
    fontWeight: 'light',
    fontSize: '20px',
    letterSpacing: '8px',
}