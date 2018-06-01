import PropTypes from 'prop-types';
import React, { Component } from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';

import BackArrow from '../assets/icon/back-arrow.svg';
import '../css/Logo.css';
import { TimelineMax } from 'gsap';

class Logo extends Component {
  initFocusAnimation() {
    const duration = 0.5;
    const tl = new TimelineMax();
    tl.add('start');
    tl.to($('#Logo .logo-text'), duration, {
      scaleX: 0,
      rotation: 360,
      transformOrigin: 'center',
      opacity: 0,
    }, 'start');
    tl.from($('#Logo .back-arrow'), duration, {
      rotation: -360,
      scaleX: 0,
      opacity: 0,
    }, 'start');

    tl.pause();
    return tl;
  }

  componentDidMount() {
    this.focusAnimation = this.initFocusAnimation();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.focused !== this.props.focused) {
      if (this.props.focused) {
        // Change logo to back arrow
        this.focusAnimation.play();
      } else {
        // Change back arrow to logo
        this.focusAnimation.reverse();
      }
    }
  }

  render() {
    return (
      <div id="Logo">
        <div className="logo-text">SEAN D KIM</div>
        <div className="back-arrow"><img src={BackArrow} /></div>
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
