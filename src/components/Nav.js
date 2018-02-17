import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/Nav.css';

import { changePage } from '../actions';

const menuWrapperStyle = {
  display: 'flex',
  alignSelf: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'white',
};

const menuTabStyle = {
  margin: '1vh',
};

const menuTextStyle = {
  fontFamily: 'Roboto',
  fontSize: '25px',
  whiteSpace: 'nowrap',
};

class Nav extends Component {
  constructor(props) {
    super(props);
    this.pages = ['about me', 'projects', 'big fish']; // change to context
  }

  render() {
    const { currentPageName, focused } = this.props;
    const tabs = [];
    for (let i = 0; i < this.pages.length; i += 1) {
      const thisPageName = this.pages[i];
      let menuTabClasses = focused ? 'menu-tab focused' : 'menu-tab';
      const menuTextClasses = focused ? 'menu-text focused' : 'menu-text';
      const thisTabStyle = { ...menuTabStyle };
      if (thisPageName === currentPageName) {
        menuTabClasses += ' selected';
      }

      const elem = (
        <div key={i} style={thisTabStyle} className={menuTabClasses}>
          <div style={menuTextStyle} className={menuTextClasses}
            onClick={() => this.props.changePage(thisPageName)}>
            {thisPageName}
          </div>
        </div>
      );

      tabs.push(elem);
    }

    const navClasses = focused ? 'Nav focused' : 'tab';
    return (
      <div className={navClasses} style={menuWrapperStyle}>
        { tabs }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentPageName: state.currentPageName,
  focused: state.focused,
  media: state.media,
});

const mapDispatchToProps = {
  changePage,
};

Nav.propTypes = {
  currentPageName: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired,
  changePage: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
