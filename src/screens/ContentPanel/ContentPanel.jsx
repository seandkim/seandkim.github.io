import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import AboutCover from 'components/AboutContent';
import Door from 'components/Door';
import './ContentPanel.css';
import { ABOUT_ME } from 'util/const';

class ContentPanel extends Component {
  render() {
    const { currentPageName } = this.props;

    switch (currentPageName) {
      // change to constant
      case ABOUT_ME:
        return (
          <div id="ContentPanel">
            <div className="door-wrapper">
              About Me
              <Door />
              Click to Enter
            </div>
          </div>
        );
      default:
        return (
          <div>
            <div className="construction-message">
              Under
              <br />
              Construction
            </div>
          </div>
        );
    }
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
