import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

const logoStyle = {
  position: 'absolute',
  top: '65px',
  left: '65px',
  zIndex: 1,

  color: 'white',
  fontFamily: 'Montserrat',
  fontWeight: 200,
  fontSize: '20px',
  letterSpacing: 5.5,
};

class Logo extends Component {
  render() {
    return (
      <div style={logoStyle}>
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
