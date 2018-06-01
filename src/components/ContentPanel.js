import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import AboutCover from './Contents/AboutContent';
import Door from './Door';
import '../css/ContentPanel.css'

class ContentPanel extends Component {
  render() {
    const { currentPageName, focused } = this.props;

    return (
      <div id="Content">
        {focused ? this.renderContent(currentPageName) : this.renderDoorWrapper(currentPageName)}
      </div>
    );
  }

  renderDoorWrapper(currentPageName) {
    return (
      <div className="door-wrapper">
        <div className="door-text door-title">{currentPageName}</div>
        <Door type="about me" />
        <div className="door-text">Click to Enter</div>
      </div>
    );
  }

  renderContent(currentPageName) {
    switch (currentPageName) {
    case 'about me':
      return (
        <AboutCover/>
      );
    default:
      return (<div className="construction-message">Sorry, this page is under Construction(</div>);
    }
  }
}

ContentPanel.propTypes = {
  currentPageName: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired,
};

ContentPanel.contextTypes = {
  colors: PropTypes.object,
};

const mapStateToProps = state => ({
  currentPageName: state.currentPageName,
  focused: state.focused,
});

export default connect(mapStateToProps)(ContentPanel);
