import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// import ContactInfo from './components/ContactInfo';
import ContentPanel from './components/ContentPanel';
import ImageFiller from './components/ImageFiller';
import Logo from './components/Logo';
import Nav from './components/Nav';
import pageConfig from './json/pageConfig.json';
import { changeMedia, changeFocus, changePage } from './actions';
import './css/App.css';

class App extends Component {
  getChildContext() {
    return {
      colors: {
        darkGray: '#2E2E2D', // about me
        olive: 'rgba(46, 76, 12, 0.82)', // projects
        lightBlue: 'rgba(35, 127, 177, 0.6)', // big fish
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

  renderSmall() {
    const { currentPageName} = this.props;
    return (
      <div className="App" >
        <Logo align="center" vertical={false} />
        <div className="flex-wrapper">
          <ImageFiller imageName={currentPageName}>
            <ContentPanel />
          </ImageFiller>
        </div>
      </div>
    );
  }

  render() {
    const { currentPageName, focused, media } = this.props;

    if (media === 'small') {
      return this.renderSmall();
    }
    const { sideColor, sideTexture, darkenRatio } = pageConfig[currentPageName];

    return (
      <div id="App">
        <Logo align="left" vertical={!!focused} />
        <div className="flex-wrapper">
          <div className="half-screen-panel" onClick={this.unfocus.bind(this)}>
            <ImageFiller imageName={currentPageName} darkenRatio={darkenRatio}>
              <Nav />
            </ImageFiller>
          </div>
          <div className="half-screen-panel">
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
