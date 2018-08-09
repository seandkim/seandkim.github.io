import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AboutCover from './components/AboutContent';
import Door from '../../components/Door';
import './ContentPanel.css';

class ContentPanel extends Component {
  render() {
    const { currentPageName, focused } = this.props;
    return (
      <div id="Content">
        {this.renderDoorWrapper(currentPageName)}
      </div>
    );
    // return (
    //   <div id="Content">
    //     {focused ? this.renderContent(currentPageName) : this.renderDoorWrapper(currentPageName)}
    //   </div>
    // );
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
      return (
        <div>
          {this.renderDoorWrapper(currentPageName)}
          <div className="construction-message">
            Under <br /> Construction
          </div>
        </div>
      );
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
