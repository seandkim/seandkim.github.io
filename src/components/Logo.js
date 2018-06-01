import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/Logo.css';

class Logo extends Component {
  render() {
    return (
      <div id="Logo">
        SEAN D KIM
      </div>
    );
  }
}

const mapStateToProps = state => ({
  focused: state.focused,
});

Logo.propTypes = {
  focused: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Logo);
