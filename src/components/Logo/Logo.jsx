import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import BackArrow from '../../assets/icon/back-arrow.svg';
import { changeFocus } from '../../actions';
import './Logo.css';

class Logo extends Component {
  render() {
    return (
      <div id="Logo">
        <div className="logo-text">SEAN D KIM</div>
        <div className="back-arrow" onClick={() => this.props.changeFocus(false)}>
          <img src={BackArrow} alt="Back"/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  focused: state.focused,
});

const mapDispatchToProps = {
  changeFocus,
};
Logo.propTypes = {
  focused: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Logo);
