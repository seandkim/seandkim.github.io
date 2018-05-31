import PropTypes from 'prop-types';
import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { changePage } from '../actions';

const menuWrapperStyle = {
  display: 'flex',
  alignSelf: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'white',
};

const menuTextStyle = {
  margin: '12px',
  fontFamily: "'Encode Sans Semi Condensed', sans-serif",
  fontWeight: 200,
  whiteSpace: 'nowrap',
};

class Nav extends Component {
  constructor(props) {
    super(props);
    this.pages = ['about me', 'projects', 'big fish']; // change to context
  }

  render() {
    const { currentPageName } = this.props;

    const tabs = _.map(this.pages, (pageName, i) => {
      const style = {
        ...menuTextStyle,
        borderBottom: pageName === currentPageName ? '1px solid white' : 'none',
      }

      return (
        <div key={i} onClick={() => this.props.changePage(pageName)}
          style={style} >
          {pageName}
        </div>
      )
    });

    return (
      <div style={menuWrapperStyle}>
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
