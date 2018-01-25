import PropTypes from 'prop-types';
import React, { Component } from 'react';

import AboutCover from '../images/cover/about.png'
import GreyLinen from '../images/texture/grey-linen.png';

export default class ImageFiller extends Component {
    render() {
        const isImage = this.props.imageName != null;
        const isColor = this.props.colorName != null ;

        if (isImage) {
            var image;
            var customStyle = {};

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

            var imgStyle = { ...absStyle, ...customStyle,
                backgroundImage: "url(" + image + ")" };
        }

        if (isColor) {
            if (this.context.colors[this.props.colorName] != null) {
                var colorStyle = {
                    ...absStyle,
                    backgroundColor: this.context.colors[this.props.colorName],
                }
            }
        }

        return (
            <div className="ImageFiller" style={wrapperStyle}>
                {isImage && <div className="ImageFiller-image" style={imgStyle} />}
                {isColor && <div className="ImageFiller-color" style={colorStyle} />}
                { this.props.children }
            </div>
        );
    }
}

ImageFiller.contextTypes = {
    colors: PropTypes.object,
}

const wrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const absStyle = {
    position: 'absolute',
    left: '0px',
    top: '0px',
    zIndex: '-1',
    width: "100%",
    height: "100%",
    backgroundSize: "auto 100%",
}