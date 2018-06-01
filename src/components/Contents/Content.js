import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TransitionGroup } from 'react-transition-group'
import _ from 'lodash';
import { connect } from 'react-redux';
import pageConfig from '../../json/pageConfig.json';
import AboutCover from './AboutContent';
import Door from './../Door';
import { changeFocus } from '../../actions';

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
}

function FirstChild(props) {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
}

class Content extends Component {
  render() {
    const { currentPageName, focused } = this.props;

    return (
      <div className="content-wrapper">
        {focused ? this.renderContent(currentPageName) : this.renderDoorWrapper(currentPageName)}
      </div>
    );
  }

  renderDoorWrapper(currentPageName) {
    return (
      <div className="door-wrapper" style={doorWrapperStyle}>
        <div style={{ ...doorTextStyle, ...doorTitleStyle }}>{currentPageName}</div>
        <Door type="about me" />
        <div style={doorTextStyle}>Click to Enter</div>
      </div>
    );
  }

  renderContent(currentPageName) {
    switch (currentPageName) {
    case 'about me':
      return (
        <AboutCover key="123123" />
      );
    default:
      const constructionStyle = {
        fontFamily: 'Nunito',
        lineHeight: '1.8',
        fontSize: '20px',
        textAlign: 'left',
      };
      return (<div key="construction" style={constructionStyle}>Sorry, this page is under Construction :'(</div>);
    }
  }
}

Content.propTypes = {
  currentPageName: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired,
};

Content.contextTypes = {
  colors: PropTypes.object,
};

const mapStateToProps = state => ({
  currentPageName: state.currentPageName,
  focused: state.focused,
});

// TODO delete
const mapDispatchToProps = {
//   onPageChange: changePage,
//   onDoorClick: () =>
  changeFocus,
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
