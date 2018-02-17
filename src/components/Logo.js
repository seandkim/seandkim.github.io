import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/Logo.css';

const logoStyle = {
  position: 'absolute',
  top: '50px',
  zIndex: 1,

  color: 'white',
  fontFamily: 'Montserrat',
  fontWeight: 'light',
  fontSize: '20px',
  letterSpacing: '8px',
};

class Logo extends Component {
  render() {
    let customStyle;
    switch (this.props.align) {
    case 'center':
      customStyle = { left: '0px', right: '0px', textAlign: 'center' };
      break;
    case 'left':
    default:
      customStyle = { left: '6vw' };
      break;
    }

    let classes = 'Logo';
    if (this.props.vertical) {
      classes += ' vertical';
    }

    return (
      <div className={classes} style={{ ...logoStyle, ...customStyle }}>
        SEAN D KIM
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentPageName: state.currentPageName,
  focused: state.focused,
  media: state.media,
});

Logo.propTypes = {
  align: PropTypes.string.isRequired,
  vertical: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Logo);
