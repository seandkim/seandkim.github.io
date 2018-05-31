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

const doorTextStyle = {
  color: 'white',
  fontFamily: "'Encode Sans Semi Condensed', sans-serif",
  fontWeight: '100',
  fontSize: '25px',
};

const doorTitleStyle = {
  textTransform: 'uppercase',
  letterSpacing: 2,
  // fontSize: '30px',
}

class Content extends Component {
  render() {
    const { currentPageName, focused, media } = this.props;

    if (!focused) {
      return this.renderDoor();
    }

    return this.renderContent();
  }

  renderDoor(textColor) {
    const { currentPageName } = this.props;
    return (
      <div className="Content">
        <div style={doorWrapperStyle}>
          <div style={{ ...doorTextStyle, ...doorTitleStyle }}>{currentPageName}</div>
          <Door type="about me" color={textColor} />
          <div style={doorTextStyle}>Click to Enter</div>
        </div>
      </div>
    );
  }

  renderContent() {
    const { currentPageName } = this.props;
    const constructionStyle = {
      fontFamily: 'Nunito',
      lineHeight: '1.8',
      fontSize: '20px',
      textAlign: 'left',
    };

    switch (currentPageName) {
    case 'about me':
      return <AboutCover />;
    default:
      return (<div style={constructionStyle}>Sorry, this page is under Construction :'(</div>);
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
