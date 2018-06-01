import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeFocus } from './../actions';
import '../css/Door.css';

import AboutDoor from '../assets/door/aboutme_door.png';
import ProjectsDoor from '../assets/door/projects_door.png';
import BigFishDoor from '../assets/door/bigfish_door.png';

class Door extends Component {
  render() {
    const { currentPageName } = this.props;
    let imageName;
    switch (currentPageName) {
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

    return (
      <div>
        <div id="Door" onClick={this.onClick.bind(this, currentPageName)}>
          <div className="door-image" style={{ backgroundImage: `url(${imageName})` }} />
        </div>
      </div>
    );
  }

  onClick(currentPageName) {
    this.props.changeFocus(true)
  }
}

Door.propTypes = {
  currentPageName: PropTypes.string.isRequired,
  changeFocus: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  currentPageName: state.currentPageName,
});

const mapDispatchToProps = {
  changeFocus,
};

export default connect(mapStateToProps, mapDispatchToProps)(Door);
