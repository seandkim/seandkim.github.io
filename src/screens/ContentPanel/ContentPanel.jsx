import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import AboutCover from 'components/AboutContent';
import Door from 'components/Door';
import './ContentPanel.css';
import { ABOUT_ME, PROJECTS, BIG_FISH } from 'util/const';

class ContentPanel extends Component {
  render() {
    const { currentPageName } = this.props;
    let doorWrapper;
    switch (currentPageName) {
      case ABOUT_ME:
        doorWrapper = (
          <div className="door-wrapper">
            About Me
            <Door />
            Click to Enter
          </div>
        );
        break;
      case PROJECTS:
        doorWrapper = (
          <div className="door-wrapper">
            Projects
            <Door />
            Click to Enter
          </div>
        );
        break;
      case BIG_FISH:
        doorWrapper = (
          <div className="door-wrapper">
            Projects
            <Door />
            Click to Enter
          </div>
        );
        break;
      default:
        // TODO: fix
        // doorWrapper = (
        //   <div className="door-wrapper">
        //     <div className="construction-message">
        //       Under
        //       <br />
        //       Construction
        //     </div>
        //   </div>
        // );
    }

    return (
      <div id="ContentPanel">
        {doorWrapper}
      </div>
    );
  }
}

ContentPanel.propTypes = {
  currentPageName: PropTypes.string.isRequired,
  // focused: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  currentPageName: state.currentPageName,
  focused: state.focused,
});

export default connect(mapStateToProps)(ContentPanel);
