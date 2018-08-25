import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import BackArrow from '../../assets/icon/back-arrow.svg';
import { changeFocus } from '../../actions';
import './Logo.css';

class Logo extends Component {
  render() {
    const { changeAppFocus } = this.props;

    return (
      <div id="Logo">
        <div className="logo-text">SEAN D KIM</div>
        <div className="back-arrow" onClick={() => changeAppFocus(false)}>
          <img src={BackArrow} alt="Back" />
        </div>
      </div>
    );
  }
}

Logo.propTypes = {
  changeAppFocus: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  focused: state.focused,
});

const mapDispatchToProps = {
  changeAppFocus: changeFocus,
};

export default connect(mapStateToProps, mapDispatchToProps)(Logo);
