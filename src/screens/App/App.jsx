import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// import ContactInfo from './components/ContactInfo';
import Logo from 'components/Logo';
import Nav from 'components/Nav';

import { changeMedia, changeFocus } from 'actions';
import { initLargeFocusAnimation, initSmallFocusAnimation } from 'util/animations';
import { SMALL_DEVICE, LARGE_DEVICE, PAGE_CONFIG } from 'util/const';
import './App.css';

import { getBackgroundImageStyle, getPanelGradientStyle } from 'util/image';
import ContentPanel from '../ContentPanel/ContentPanel';

class App extends Component {
  // Check dimension & initialize all multi-component variables
  componentDidMount() {
    const { media } = this.props;
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this));

    if (media === SMALL_DEVICE) {
      this.focusAnimation = initSmallFocusAnimation();
    } else {
      this.focusAnimation = initLargeFocusAnimation();
    }
  }

  // Deals with animation for updating components
  componentDidUpdate(prevProps) {
    const { media, focused, currentPageName } = this.props;

    // Re-initialize animation if necessary
    if (prevProps.media !== media || prevProps.currentPageName !== currentPageName) {
      // TODO: fix bug where changing media messes up focus animation (back arrow doesn't show)
      if (media === LARGE_DEVICE) {
        this.focusAnimation = initLargeFocusAnimation();
      } else {
        this.focusAnimation = initSmallFocusAnimation();
      }
    }

    if (prevProps.focused !== focused) {
      if (focused) {
        // Change logo to back arrow
        this.focusAnimation.timeScale(1);
        this.focusAnimation.play();
      } else {
        // Change back arrow to logo
        this.focusAnimation.timeScale(2);
        this.focusAnimation.reverse();
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  /**
   * Calculate & Update state of new dimensions
   */
  updateDimensions() {
    const { media, changeAppMedia } = this.props;
    const ratio = window.innerWidth / window.innerHeight;
    if (ratio < 0.8) {
      if (media === LARGE_DEVICE) {
        changeAppMedia(SMALL_DEVICE);
      }
    } else {
      if (media === SMALL_DEVICE) {
        changeAppMedia(LARGE_DEVICE);
      }
    }
  }

  unfocus() {
    const { focused, changeAppFocus } = this.props;
    if (focused) {
      changeAppFocus(false);
    }
  }

  render() {
    const { currentPageName } = this.props;

    return (
      <div id="App" style={getBackgroundImageStyle(currentPageName)}>
        <Logo />
        <div className="gradient-div" style={getPanelGradientStyle(currentPageName)}>
          <div className="half-panel left-panel">
            <Nav />
          </div>
          <div className="half-panel right-panel">
            <ContentPanel />
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  currentPageName: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired,
  media: PropTypes.string.isRequired,
  changeAppMedia: PropTypes.func.isRequired,
  changeAppFocus: PropTypes.func.isRequired,
};

App.childContextTypes = {
  colors: PropTypes.objectOf(PropTypes.string),
};

const mapStateToProps = state => ({
  currentPageName: state.currentPageName,
  focused: state.focused,
  media: state.media,
});

const mapDispatchToProps = {
  changeAppMedia: changeMedia,
  changeAppFocus: changeFocus,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
