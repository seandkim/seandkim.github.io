import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Door from './Door';

import { changeMedia, changePage, changeFocus } from "../actions";

class Content extends Component {
  render() {
    const { currentPageName } = this.props;

    const textColor = this.props.mediaQuery === 'small' ? 'white' : this.context.colors.darkGray;
    const doorNameStyle1 = { ...doorNameStyle, 'color': textColor };
    return <div className="Content" style={wrapperStyle}>
      <div style={doorWrapperStyle}>
        <div style={doorNameStyle1}>{currentPageName}</div>
        <Door type="about me" borderColor={textColor} onClick={this.props.handleDoorClick} />
        <div style={doorNameStyle1}>Click to Enter</div>
      </div>
    </div>;
  }
}

const wrapperStyle = {
  position: 'relative',
};

const doorWrapperStyle = {
  height: '60vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const doorNameStyle = {
  fontFamily: 'Satisfy',
  fontSize: '40px',
  textTransform: 'capitalize',
  color: null, // darkGray, specified in render
};

Content.propTypes = {
  currentPageName: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired,
  media: PropTypes.string.isRequired,
};

Content.contextTypes = {
  colors: PropTypes.object
};

const mapStateToProps = state => ({
  currentPageName: state.currentPageName,
  focused: state.focused,
  media: state.media,
});

const mapDispatchToProps = {
//   onPageChange: changePage,
//   onDoorClick: () =>
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);