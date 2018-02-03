import Media from "react-media";
import PropTypes from 'prop-types';
import React, { Component } from 'react';
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
    this.setState({ currentpage: currentPage, focused: false });
  }

  handleDoorClick() {
    this.setState({ focused: true });
  }

  render() {
    const { currentPage, focused } = this.state;

    return (
      <div>
        <Media query="(max-width: 750px)">
          {(matches) => {
            const mediaQuery = matches ? 'small' : 'large';
            const content = (
              <Content mediaQuery={mediaQuery} currentPage={currentPage} focused={focused}
                handlePageChange={this.handlePageChange.bind(this)}
                handleDoorClick={this.handleDoorClick.bind(this)} />
            )

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
              )
            }

            const leftClass = focused ? "leftSide focused" : "leftSide"
            const rightClass = focused ? "rightSide focused" : "rightSide"

            return (
              <div className="App" style={wrapperStyle}>
                <Logo align='left' vertical={focused ? true : false}/>
                <div style={flexStyle}>
                  <div className={leftClass} style={halfScreenStyle}>
                    <ImageFiller imageName='about-cover'>
                      <Nav mediaQuery='large' currentPage={currentPage} focused={focused}
                        handlePageChange={this.handlePageChange} />
                    </ImageFiller>
                  </div>
                  <div className={rightClass} style={halfScreenStyle}>
                    <ImageFiller imageName="grey-linen" colorName="warmBlue">
                      <Content mediaQuery={mediaQuery} currentPage={currentPage} focused={focused}
                        handlePageChange={this.handlePageChange.bind(this)}
                        handleDoorClick={this.handleDoorClick.bind(this)} />
                    </ImageFiller>
                  </div>
                </div>
              </div>
            )
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