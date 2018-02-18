import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/Content.css';

import Door from './Door';

const wrapperStyle = {
  // position: 'relative',
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
  fontSize: '5vh',
  textTransform: 'capitalize',
  color: null, // darkGray, specified in render
};

class Content extends Component {
  render() {
    const { currentPageName, focused } = this.props;

    let textColor;
    if (this.props.media === 'small') {
      textColor = 'white';
    } else {
      switch (currentPageName) {
      case 'about me':
        textColor = this.context.colors.darkGray;
        break;
      case 'projects':
        textColor = this.context.colors.darkGreen;
        break;
      case 'big fish':
      default:
        textColor = 'white';
      }
    }

    if (!focused) {
      return this.renderDoor(textColor);
    }

    return this.renderContent(textColor);
  }

  renderDoor(textColor) {
    const { currentPageName } = this.props;
    const doorNameStyle1 = { ...doorNameStyle, color: textColor };

    return (
      <div className="Content" style={wrapperStyle}>
        <div style={doorWrapperStyle}>
          <div style={doorNameStyle1}>{currentPageName}</div>
          <Door type="about me" />
          <div style={doorNameStyle1}>Click to Enter</div>
        </div>
      </div>
    );
  }

  renderContent(textColor) {
    const { currentPageName } = this.props;
    const wrapperStyle1 = {
      display: 'flex',
      flexDirection: 'column',
      padding: '10vw',
      overflowY: 'scroll',
    };
    const headerStyle1 = {
      ...doorNameStyle,
      color: textColor,
      margin: '40px 10px',
      alignSelf: 'flex-start',
    };
    const contentStyle = {
      color: textColor,
      fontFamily: 'Raleway',
      lineHeight: '1.8',
      fontSize: '20px',
      textAlign: 'left',
    };

    switch (currentPageName) {
    case 'about me':
      return (
        <div className="Content" style={wrapperStyle1}>
          <div style={headerStyle1}>{currentPageName}</div>
          <div style={contentStyle}>
            Hello, I’m Sean <a href="http://onepiece.wikia.com/wiki/Will_of_the_D.">D</a> Kim.
            <br /> <br />
            I study Computer Science in Carnegie Mellon University. Currently I am on a gap semester,
            interning at <a href="https://www.skelterlabs.com/"> Skelter Labs</a> as a software engineer.
            <br />
            I will be in New York this upcoming summer,
            interning at <a href="https://www.squarespace.com/">Squarespace</a>.
          </div>
        </div>
      )
    default:
      return (<div style={contentStyle}>Under Construction</div>);
    }
  }
}

Content.propTypes = {
  currentPageName: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired,
  media: PropTypes.string.isRequired,
};

Content.contextTypes = {
  colors: PropTypes.object,
};

const mapStateToProps = state => ({
  currentPageName: state.currentPageName,
  focused: state.focused,
  media: state.media,
});

// TODO delete
const mapDispatchToProps = {
//   onPageChange: changePage,
//   onDoorClick: () =>
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
