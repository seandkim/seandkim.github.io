import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeFocus } from './../actions';

import AboutDoor from '../images/door/aboutme_door.png';
import ProjectsDoor from '../images/door/projects_door.png';
import BigFishDoor from '../images/door/bigfish_door.png';

const doorWrapperStyle = {
  width: '200px',
  height: '400px',
};

const doorStyle = {
  backgroundImage: `url(${AboutDoor})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  width: '100%',
  height: '100%',
};

const turnWhite = {
  filter: 'brightness(0) invert(100%)',
}

class Door extends Component {
  render() {
    let imageName;
    switch (this.props.currentPageName) {
    case 'about me':
      imageName = AboutDoor;
      break;
    case 'projects':
      imageName = ProjectsDoor;
      break;
    case 'big fish':
      imageName = BigFishDoor;
      break;
    default:
      imageName = AboutDoor;
      break;
    }

    const style = { ...doorStyle, backgroundImage: `url(${imageName})` };

    return (
      <div className="Door" style={doorWrapperStyle} onClick={this.props.onClick}>
        <div style={style} />
      </div>
    );
  }
}

Door.propTypes = {
  borderColor: PropTypes.string.isRequired,
  currentPageName: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  currentPageName: state.currentPageName,
  media: state.media,
});

const mapDispatchToProps = {
  onClick: () => changeFocus(true),
};

export default connect(mapStateToProps, mapDispatchToProps)(Door);
