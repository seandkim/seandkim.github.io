import React, { Component } from 'react';

import AboutCover from '../images/cover/about.png'
import GreyLinen from '../images/texture/grey-linen.png';

export default class ImageFiller extends Component {
    render() {
        let image;
        let customStyle = {};

        switch (this.props.imageName) {
            case 'about-cover':
                image = AboutCover;
                customStyle['backgroundPositionX'] = '-130px'; // TODO dependent on width?
                break;
            case 'grey-linen':
                image = GreyLinen;
                break;
            default:
                console.error("Image name not found:", this.props.imageName)
        }

        const imgStyle = {
            backgroundImage: "url(" + image + ")",
            ...imageStyle,
            ...customStyle,
        }
        return (
            <div style={imgStyle}></div>
        );
    }
}

const imageStyle = {
    position: 'absolute',
    left: '0px',
    top: '0px',
    zIndex: '-1',
    width: "100%",
    height: "100%",
    backgroundSize: "auto 100%",
}