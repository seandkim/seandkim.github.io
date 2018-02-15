import Media from 'react-media';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/App.css';

import Content from './components/Content';
import ImageFiller from './components/ImageFiller';
import Logo from './components/Logo';
import Nav from './components/Nav';

import { changeMedia, changePage, changeFocus } from './actions';

class App extends Component {
  constructor(props) {
    super(props);

    console.log("hello");
  }

  getChildContext() {
    return {
      colors: {
        darkGray: '#4A4A4A',
        warmBlue: 'rgba(77, 97, 103, 0.66)',
      }
    };
  }

  render() {
    console.log("App render start", this.props);

    const { media, focused } = this.props;

    return (
      <div>
        <Media query="(max-width: 750px)">
          {(matches) => {
            const content = (
              <Content />
            );

            if (matches) {
              return (
                <div style={wrapperStyle}>
                  <Logo align='center'/>
                  <div style={flexStyle}>
                    <ImageFiller imageName='about-cover'>
                      {content}
                    </ImageFiller>
                  </div>
                </div>
              );
            }

            const leftClass = focused ? 'leftSide focused' : 'leftSide';
            const rightClass = focused ? 'rightSide focused' : 'rightSide';

            return <div className="App" style={wrapperStyle}>
              <Logo align="left" vertical={focused ? true : false} />
              <div style={flexStyle}>
                <div className={leftClass} style={halfScreenStyle}>
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
            </div>;
          }}
        </Media>
      </div>
    );
  }
}

const wrapperStyle = {
  weight: '100vw',
  height: '100vh'
};

const flexStyle = {
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
};

const halfScreenStyle = {
  position: 'relative',
  width: '50vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

App.childContextTypes = {
  colors: PropTypes.object,
};

const mapStateToProps = state => ({
  focused: state.focused,
  media: state.media
});

export default connect(mapStateToProps)(App);