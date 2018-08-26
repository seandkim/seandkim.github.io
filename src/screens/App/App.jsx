import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// import ContactInfo from './components/ContactInfo';
import ContentPanel from '../ContentPanel';
import ImageFiller from '../../components/ImageFiller';
import Logo from '../../components/Logo';
import Nav from '../../components/Nav';
import { changeMedia, changeFocus } from '../../actions';
import { initLargeFocusAnimation, initSmallFocusAnimation } from '../../util/animations';
import './App.css';
import { SMALL_DEVICE, LARGE_DEVICE, PAGE_CONFIG } from '../../util/const';

class App extends Component {
  // Global variables
  getChildContext() {
    return {
      colors: {
        darkGray: '#2E2E2D', // about me
        olive: 'rgba(46, 76, 12, 0.82)', // projects
        lightBlue: 'rgba(35, 127, 177, 0.6)', // big fish
      },
    };
  }

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
        this.focusAnimation.seek('reverse-start');
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
    const { currentPageName, media } = this.props;

    if (media === SMALL_DEVICE) {
      return (
        <div id="App">
          <Logo />
          <div className="flex-wrapper">
            <ImageFiller imageName={currentPageName}>
              <ContentPanel />
            </ImageFiller>
          </div>
        </div>
      );
    }

    const { sideColor, sideTexture, darkenRatio } = PAGE_CONFIG[currentPageName];

    return (
      <div id="App">
        <Logo />
        <div className="flex-wrapper">
          <div className="half-screen-panel nav-panel-wrapper" onClick={this.unfocus.bind(this)}>
            <ImageFiller imageName={currentPageName} darkenRatio={darkenRatio}>
              <Nav />
            </ImageFiller>
          </div>
          <div className="half-screen-panel content-panel-wrapper">
            <ImageFiller imageName={sideTexture} colorName={sideColor}>
              <ContentPanel />
            </ImageFiller>
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
