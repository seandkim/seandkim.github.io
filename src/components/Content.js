import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/Content.css';

import Door from './Door';

const wrapperStyle = {
  // position: 'relative',
  overflowY: 'scroll',
};

const doorWrapperStyle = {
  height: '60vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const doorNameStyle = {
  fontFamily: 'Dosis',
  fontWeight: '400',
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
      fontSize: '70px',
      fontWeight: '100',
    };
    const contentStyle = {
      color: textColor,
      fontFamily: 'Nunito',
      lineHeight: '1.8',
      fontSize: '20px',
      textAlign: 'left',
    };

    switch (currentPageName) {
    case 'about me':
      return (
        <div className="Content entering" style={wrapperStyle1}>
          <div className="header" style={headerStyle1}>
            Hello, I’m Sean <a href="http://onepiece.wikia.com/wiki/Will_of_the_D.">D</a> Kim.
          </div>
          <div className="body" style={contentStyle}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
                <img src="https://i.imgur.com/mEPWCqq.gif" />
              </div>
              Except it is not :)
            </div>
            <div style={{ textIndent: '40px' }}>
              <p>
                I study Computer Science in Carnegie Mellon University, expecting to graduate on
                May 2019. Currently I am on a gap semester,
                interning at <a href="https://www.skelterlabs.com/"> Skelter Labs</a> as a software engineer.
                I will be in New York this upcoming summer,
                interning at <a href="https://www.squarespace.com/">Squarespace</a> as a site reliability engineer.
              </p>
              <p>
                I am looking for full time opportunity! Feel free to check out my resume and contact me.
              </p>
            </div>
          </div>
        </div>
      );
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
