import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AboutCover from './components/AboutContent';
import Door from '../../components/Door';
import './ContentPanel.css';

class ContentPanel extends Component {
  renderContent(currentPageName) {
    switch (currentPageName) {
    // change to constant
      case 'about me':
        return (
          <AboutCover />
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

  render() {
    const { currentPageName } = this.props;
    return (
      <div id="Content">
        <div className="content-elem" style={{ zIndex: 10 }}>
          <div className="door-wrapper">
            <div className="door-text door-title">{currentPageName}</div>
            <Door type="about me" disable={currentPageName !== 'about me'} />
            <div className="door-text">Click to Enter</div>
          </div>
        </div>
        <div className="content-elem">
          {this.renderContent(currentPageName)}
        </div>
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
