import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/App.css';

import Content from './components/Content';
import ImageFiller from './components/ImageFiller';
import Logo from './components/Logo';
import Nav from './components/Nav';

import { changeMedia, changeFocus } from './actions';

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
        darkGray: '#4A4A4A',
        warmBlue: 'rgba(77, 97, 103, 0.66)',
      },
    };
  }

  /**
   * Calculate & Update state of new dimensions
   */
  updateDimensions() {
    if (window.innerWidth < 750) {
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

  render() {
    console.log('App render start', this.props);

    const { media, focused } = this.props;

    if (media === 'small') {
      return (
        <div style={wrapperStyle}>
          <Logo align="center" vertical={false} />
          <div style={flexStyle}>
            <ImageFiller imageName="about-cover">
              <Content />
            </ImageFiller>
          </div>
        </div>
      );
    }

    const leftClass = focused ? 'leftSide focused' : 'leftSide';
    const rightClass = focused ? 'rightSide focused' : 'rightSide';

    return (
      <div className="App" style={wrapperStyle}>
        <Logo align="left" vertical={!!focused} />
        <div style={flexStyle}>
          <div className={leftClass} style={halfScreenStyle} onClick={() => this.props.changeFocus(false)}>
            <ImageFiller imageName="about-cover">
              <Nav />
            </ImageFiller>
          </div>
          <div className={rightClass} style={halfScreenStyle}>
            <ImageFiller imageName="grey-linen" colorName="warmBlue">
              <Content />
            </ImageFiller>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  focused: PropTypes.bool.isRequired,
  media: PropTypes.string.isRequired,
  changeMedia: PropTypes.func.isRequired,
  changeFocus: PropTypes.func.isRequired,
};

App.childContextTypes = {
  colors: PropTypes.object,
};

const mapStateToProps = state => ({
  focused: state.focused,
  media: state.media,
});

const mapDispatchToProps = {
  changeMedia, changeFocus,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
