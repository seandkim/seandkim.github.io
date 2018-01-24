import React, { Component } from 'react';
import Content from './components/Content';
import Logo from './components/Logo';
import Nav from './components/Nav';
import PropTypes from 'prop-types';
import Media from "react-media";
import './styles/App.css';

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
                  <Logo />
                  <div style={flexStyle}>
                    <Content mediaQuery='small' currentPage={currentPage} focused={focused}
                      handlePageChange={this.handlePageChange} />
                  </div>
                </div>
              )
            } else {
              return (
                <div style={wrapperStyle}>
                  <Logo />
                  <div style={flexStyle}>
                    <Nav mediaQuery='large' currentPage={currentPage} focused={focused}
                      handlePageChange={this.handlePageChange} />
                    <Content mediaQuery='large' currentPage={currentPage} focused={focused}
                      handlePageChange={this.handlePageChange} />
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
  display: 'flex',
  flexDirection: 'row',
}