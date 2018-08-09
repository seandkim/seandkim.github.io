import PropTypes from 'prop-types';
import React, { Component } from 'react';

import AboutCover from '../../assets/cover/about.png';
import ProjectsCover from '../../assets/cover/projects.JPG';
import BigFishCover from '../../assets/cover/bigfish.png';
import GreyLinen from '../../assets/texture/grey-linen.png';
import ShallowWater from '../../assets/texture/shallow-water.png';

const wrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
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
    const { imageName, colorName, darkenRatio } = this.props;

    const isImage = imageName != null;
    const isColor = colorName != null;

    let imgStyle;
    let colorStyle;
    if (isImage) {
      let image;
      const customStyle = {};

      switch (imageName) {
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
        console.error('Image name not found:', imageName);
      }

      imgStyle = {
        ...absStyle,
        ...customStyle,
        backgroundImage: `url(${image})`,
      };
    }

    if (isColor) {
      if (this.context.colors[colorName] != null) {
        colorStyle = {
          ...absStyle,
          backgroundColor: this.context.colors[colorName] || colorName,
        };
      }
    }

    return (
      <div className="ImageFiller" style={wrapperStyle}>
        {isImage && <div className="ImageFiller-image" style={imgStyle} />}
        {isColor && <div className="ImageFiller-color" style={colorStyle} />}
        {(darkenRatio > 0) && <div style={{ ...absStyle, backgroundColor: `rgba(0,0,0,${darkenRatio})` }} />}
        { this.props.children }
      </div>
    );
  }
}

ImageFiller.propTypes = {
  imageName: PropTypes.string,
  colorName: PropTypes.string,
  darkenRatio: PropTypes.number.isRequired,
};

ImageFiller.defaultProps = {
  darkenRatio: 0,
}

ImageFiller.contextTypes = {
  colors: PropTypes.object,
};
