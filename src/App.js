import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import pageConfig from './json/pageConfig.json';
import './styles/App.css';

import ContactInfo from './components/ContactInfo';
import Content from './components/Contents/Content';
import ImageFiller from './components/ImageFiller';
import Logo from './components/Logo';
import Nav from './components/Nav';

import { changeMedia, changeFocus, changePage } from './actions';

const wrapperStyle = {
  weight: '100vw',
  height: '100vh',
};

const flexStyle = {
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};

const halfScreenStyle = {
  position: 'relative',
  width: '50vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

class App extends Component {
  getChildContext() {
    return {
      colors: {
        // Version 1
        // darkGray: '#4A4A4A',
        // darkGreen: '#10332C',
        // lightBlue: 'rgba(35, 127, 177, 0.6)',
        // lightBrown: 'rgba(69, 55, 7, 0.6)',
        // warmBlue: 'rgba(77, 97, 103, 0.66)',
        // olive: 'rgba(46, 76, 12, 0.82)',

        // Version 2
        darkGray: '#2E2E2D'
      },
    };
  }

  /**
   * Calculate & Update state of new dimensions
   */
  updateDimensions() {
    const ratio = window.innerWidth / window.innerHeight;
    if (ratio < 0.8) {
      if (this.props.media === 'large') {
        this.props.changeMedia('small');
      }
    } else {
      if (this.props.media === 'small') {
        this.props.changeMedia('large');
      }
    }
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  unfocus() {
    if (this.props.focused) {
      this.props.changeFocus(false);
    }
  }

  handleSwipe(event) {
    this.props.changePage('projects');
  }

  render() {
    const { currentPageName, focused, media } = this.props;

    if (media === 'small') {
      return (
        <div style={wrapperStyle} >
          <Logo align="center" vertical={false} />
          <div style={flexStyle}>
            <ImageFiller imageName={currentPageName}>
              <Content />
            </ImageFiller>
          </div>
        </div>
      );
    }

    const leftClass = focused ? 'leftSide focused' : 'leftSide';
    const rightClass = focused ? 'rightSide focused' : 'rightSide';

    const { sideColor, sideTexture, darkenRatio } = pageConfig[currentPageName];

    return (
      <div className="App" style={wrapperStyle}>
        <Logo align="left" vertical={!!focused} />
        <div style={flexStyle}>
          <div className={leftClass} style={halfScreenStyle} onClick={this.unfocus.bind(this)}>
            <ImageFiller imageName={currentPageName} darkenRatio={darkenRatio}>
              <Nav />
              <ContactInfo />
            </ImageFiller>
          </div>
          <div className={rightClass} style={halfScreenStyle}>
            <ImageFiller imageName={sideTexture} colorName={sideColor}>
              <Content />
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
  changeMedia: PropTypes.func.isRequired,
  changeFocus: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired,
};

App.childContextTypes = {
  colors: PropTypes.object,
};

const mapStateToProps = state => ({
  currentPageName: state.currentPageName,
  focused: state.focused,
  media: state.media,
});

const mapDispatchToProps = {
  changeMedia, changeFocus, changePage,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
