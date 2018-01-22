import React, { Component } from 'react';
import './styles/App.css';
import Nav from './components/Nav';
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <div style={wrapperStyle}>
        {/* <div styles={{ position: 'absolute' }} className="logo">SEAN D KIM</div> */}
        <div style={flexStyle}>
          <Nav></Nav>
          <Content></Content>
        </div>
      </div>
    );
  }
}

const wrapperStyle = {
  weight: '100vw',
  height: '100vh',
}

const flexStyle = {
  display: 'flex',
  flexDirection: 'row',
}

export default App;
