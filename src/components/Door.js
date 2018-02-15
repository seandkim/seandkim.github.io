import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeFocus } from './../actions';

const outerDoor = {
  position: 'relative',
  width: '22vh',
  height: '40vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const innerDoor = {
  width: '95%',
  height: '98%',
};

const doorKnob = {
  position: 'absolute',
  right: '3px',
  width: '1vh',
  height: '1vh',
  borderRadius: '2vh',
};

class Door extends Component {
  constructor(props) {
    super(props);

    this.borderStyle = {
      borderColor: this.props.borderColor,
      borderWidth: '3px',
      borderStyle: 'solid',
      borderRadius: '0.5vh',
    };
  }

  render() {
    return (
      <div className="Door" style={{ ...this.borderStyle, ...outerDoor }} onClick={this.props.onClick}>
        <div style={{ ...this.borderStyle, ...innerDoor }} />
        <div style={{ ...this.borderStyle, ...doorKnob, backgroundColor: this.props.borderColor }} />
      </div>
    );
  }
}

Door.propTypes = {
  borderColor: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  focused: state.focused,
  media: state.media,
});

const mapDispatchToProps = {
  onClick: () => changeFocus(true),
};

export default connect(mapStateToProps, mapDispatchToProps)(Door);
