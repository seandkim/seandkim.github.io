import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changePage } from '../actions';

const menuWrapperStyle = {
  display: 'flex',
  alignSelf: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'white',
};

const menuTabStyle = {
  fontFamily: 'Roboto',
  fontSize: '25px',
  margin: '1vh',
};

class Nav extends Component {
  constructor(props) {
    super(props);
    this.pages = ['about me', 'projects', 'big fish']; // change to context
  }

  render() {
    const { currentPageName } = this.props;
    const tabs = [];
    for (let i = 0; i < this.pages.length; i += 1) {
      const thisPage = this.pages[i];
      const thisTabStyle = { ...menuTabStyle };
      if (i === this.pages.indexOf(currentPageName)) {
        thisTabStyle.textDecoration = 'underline';
      }
      tabs.push(<div style={thisTabStyle} key={i}>{thisPage}</div>);
    }

    return (
      <div className="Nav" style={menuWrapperStyle}>
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
  media: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
