import React, { Component } from 'react';
import GreyLinen from '../images/texture/grey-linen.png';

class Content extends Component {
    render() {
        return (
            <div style={wrapperStyle}>
                {/* image loaded in Content.css */}
                <div style={colorStyle}></div>
                <div style={linenStyle}></div>
            </div>
        );
    }
}

const wrapperStyle = {
    position: 'relative',
    flexGrow: 1,
}

const linenStyle = {
    position: 'absolute',
    left: '0px',
    top: '0px',
    zIndex: '-1',
    width: "100%",
    height: "100%",
    backgroundImage: "url(" + GreyLinen + ")",
    backgroundSize: "500px",
    // backgroundColor: "#4D6167",
}

const colorStyle = {
    backgroundColor: "#4D6167",
    opacity: "0.66",
    width: "100%",
    height: "100%",
}

export default Content;
