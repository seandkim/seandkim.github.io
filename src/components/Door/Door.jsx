import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeFocus } from '../../actions';
import './Door.css';

import AboutDoor from '../../assets/door/aboutme_door.png';
import ProjectsDoor from '../../assets/door/projects_door.png';
import BigFishDoor from '../../assets/door/bigfish_door.png';

class Door extends Component {
  onClick() {
    const { changeAppFocus } = this.props;
    changeAppFocus(true);
  }

  render() {
    const { currentPageName, disable } = this.props;
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
      <div id="Door" onClick={disable ? null : this.onClick.bind(this)}>
        <div className="door-image" style={{ backgroundImage: `url(${imageName})` }} />
      </div>
    );
  }
}

Door.defaultProps = {
  disable: false,
};

Door.propTypes = {
  currentPageName: PropTypes.string.isRequired,
  changeAppFocus: PropTypes.func.isRequired,
  disable: PropTypes.bool,
};

const mapStateToProps = state => ({
  currentPageName: state.currentPageName,
});

const mapDispatchToProps = {
  changeAppFocus: changeFocus,
};

export default connect(mapStateToProps, mapDispatchToProps)(Door);
