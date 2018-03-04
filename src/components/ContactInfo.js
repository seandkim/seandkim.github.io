import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/ContactInfo.css';

const wrapperStyle = {
  width: '35%',
  fontSize: '35px',
  color: 'white',
  position: 'absolute',
  bottom: '80px',
}

const icon = {
  position: 'absolute',
}

const icon1 = {
  ...icon,
  left: '0px',
}

const icon2 = {
  ...icon,
  left: '0px',
  right: '0px',
  margin: 'auto',
}

const icon3 = {
  ...icon,
  right: '0px',
}

const innerIconStyle = {
  position: 'relative',
  color: 'white',
}

class ContactInfo extends Component {
  render() {
    const wrapperClass = this.props.focused ? 'ContactInfo focusJustChanged' : 'ContactInfo';
    return (
      <div className={wrapperClass} style={ wrapperStyle }>
        <div style={{ ...icon1, zIndex: 10 }}>
          <a className='icon' href='mailto:sdk1@andrew.cmu.edu'>
            <i className="fas fa-envelope" />
          </a>
        </div>
        <div style={icon2}>
          <a className='icon' href="https://www.linkedin.com/in/seandkim/" target="_blank">
            <i className="fab fa-linkedin" />
          </a>
        </div>
        <div style={icon3}>
          <a className='icon' href='http://www.github.com/seandkim' target="_blank">
            <i className="fab fa-github" />
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  focused: state.focused,
  media: state.media,
});

export default connect(mapStateToProps)(ContactInfo);