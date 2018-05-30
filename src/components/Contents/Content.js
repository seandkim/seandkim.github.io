import PropTypes from 'prop-types';
import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import pageConfig from '../../json/pageConfig.json';

import AboutCover from './AboutContent';
import Door from './../Door';

const doorWrapperStyle = {
  height: '60vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const doorNameStyle = {
  fontFamily: 'Heiti SC',
  fontWeight: '100',
  fontSize: '35',
  textTransform: 'capitalize',
  color: null, // darkGray, specified in render
};

class Content extends Component {
  render() {
    const { currentPageName, focused, media } = this.props;

    let textColor;
    if (this.props.media === 'small') {
      textColor = 'white';
    } else {
      const textColorName = pageConfig[currentPageName].textColor;
      textColor = _.get(this.context.colors, textColorName, textColorName);
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
      <div className="Content">
        <div style={doorWrapperStyle}>
          <div style={doorNameStyle1}>{currentPageName}</div>
          <Door type="about me" color={textColor} />
          <div style={doorNameStyle1}>Click to Enter</div>
        </div>
      </div>
    );
  }

  renderContent(textColor) {
    const { currentPageName } = this.props;
    const contentStyle = {
      color: textColor,
      fontFamily: 'Nunito',
      lineHeight: '1.8',
      fontSize: '20px',
      textAlign: 'left',
    };

    switch (currentPageName) {
    case 'about me':
      return <AboutCover textColor={this.context.colors.darkGray}
        headerFontFamily={doorNameStyle.fontFamily}/>;
    default:
      return (<div style={contentStyle}>Sorry, this page is under Construction :'(</div>);
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
