import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/Logo.css';

const logoStyle = {
  position: 'absolute',
  top: '5vw',
  zIndex: 1,

  color: 'white',
  fontFamily: 'Montserrat',
  fontWeight: 'light',
  fontSize: '20px',
  letterSpacing: '8px',
};

class Logo extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props.focused, nextProps.focused);
    // if page changed, do not animate the nav tabs
    this.focusJustChanged = this.props.focused !== nextProps.focused;
  }

  render() {
    let customStyle;
    switch (this.props.align) {
    case "center":
      customStyle = { left: "0px", right: "0px", textAlign: "center" };
      break;
    case "left":
    default:
      customStyle = { left: "6.5vw" };
      break;
    }

    let classes = "Logo";
    if (this.focusJustChanged) {
      classes += ' focusJustChanged';
    }

    if (this.props.vertical) {
      classes += " vertical";
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
  focused: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Logo);
