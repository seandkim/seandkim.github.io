import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Media from "react-media";
import './styles/App.css';

import Content from './components/Content';
import ImageFiller from './components/ImageFiller';
import Logo from './components/Logo';
import Nav from './components/Nav';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 'about me',
      focused: false,
    }
  }

  getChildContext() {
    return {
      colors: {
        darkGray: "#4A4A4A",
        warmBlue: "rgba(77, 97, 103, 0.66)",
      }
    };
  }

  handlePageChange(currentPage) {
    this.setState({ currentpage: currentPage, focused: false })
  }

  render() {
    const { currentPage, focused } = this.state;

    return (
      <div>
        <Media query="(max-width: 599px)">
          {(matches) => {
            if (matches) {
              return (
                <div style={wrapperStyle}>
                  <Logo align='center'/>
                  <div style={flexStyle}>
                    <ImageFiller imageName='about-cover'>
                      <Content mediaQuery='small' currentPage={currentPage} focused={focused}
                        handlePageChange={this.handlePageChange} />
                    </ImageFiller>
                  </div>
                </div>
              )
            } else {
              return (
                <div style={wrapperStyle}>
                  <Logo align='left'/>
                  <div style={flexStyle}>
                    <div style={halfScreenStyle}>
                      <ImageFiller imageName='about-cover'>
                        <Nav mediaQuery='large' currentPage={currentPage} focused={focused}
                          handlePageChange={this.handlePageChange} />
                      </ImageFiller>
                    </div>
                    <div style={halfScreenStyle}>
                      <ImageFiller imageName="grey-linen" colorName="warmBlue">
                        <Content mediaQuery='large' currentPage={currentPage} focused={focused}
                          handlePageChange={this.handlePageChange} />
                      </ImageFiller>
                    </div>
                  </div>
                </div>
              )
            }
          }}
        </Media>
      </div>
    );
  }
}

App.childContextTypes = {
  colors: PropTypes.object,
}

const wrapperStyle = {
  weight: '100vw',
  height: '100vh',
}

const flexStyle = {
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}

const halfScreenStyle = {
  position: 'relative',
  width: '50vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}