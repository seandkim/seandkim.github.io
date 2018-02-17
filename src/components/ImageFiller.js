import PropTypes from 'prop-types';
import React, { Component } from 'react';

import AboutCover from '../images/cover/about.png';
import ProjectsCover from '../images/cover/projects.png';
import BigFishCover from '../images/cover/bigfish.png';
import GreyLinen from '../images/texture/grey-linen.png';
import ShallowWater from '../images/texture/shallow-water.png';

const wrapperStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const absStyle = {
  position: 'absolute',
  left: '0px',
  top: '0px',
  zIndex: '-1',
  width: '100%',
  height: '100%',
  backgroundSize: 'auto 100%',
};


export default class ImageFiller extends Component {
  render() {
    const isImage = this.props.imageName != null;
    const isColor = this.props.colorName != null;

    let imgStyle;
    let colorStyle;
    if (isImage) {
      let image;
      const customStyle = {};

      switch (this.props.imageName) {
      case 'about me':
        image = AboutCover;
        customStyle.backgroundPositionX = '-130px'; // TODO dependent on width?
        break;
      case 'projects':
        image = ProjectsCover;
        customStyle.backgroundPositionX = '-100px';
        break;
      case 'big fish':
        image = BigFishCover;
        customStyle.backgroundPositionX = '-50px';
        break;
      case 'grey-linen':
        image = GreyLinen;
        break;
      case 'shallow-water':
        image = ShallowWater;
        break;
      default:
        console.error('Image name not found:', this.props.imageName);
      }

      imgStyle = {
        ...absStyle,
        ...customStyle,
        backgroundImage: `url(${image})`,
      };
    }

    if (isColor) {
      if (this.context.colors[this.props.colorName] != null) {
        colorStyle = {
          ...absStyle,
          backgroundColor: this.context.colors[this.props.colorName] || this.props.colorName,
        };
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

ImageFiller.propTypes = {
  imageName: PropTypes.string,
  colorName: PropTypes.string,
};

ImageFiller.contextTypes = {
  colors: PropTypes.object,
};
