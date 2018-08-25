import PropTypes from 'prop-types';
import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { changePage } from '../../actions';
import './Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.pages = ['about me', 'projects', 'big fish']; // change to context
  }

  render() {
    const { currentPageName, changeAppPage } = this.props;

    const tabs = _.map(this.pages, (pageName, i) => {
      const classNames = pageName === currentPageName ? 'nav-tab selected' : 'nav-tab';

      return (
        <div key={i} onClick={() => changeAppPage(pageName)}
          className={classNames}
        >
          {pageName}
        </div>
      );
    });

    return (<div id="Nav">{ tabs }</div>);
  }
}

const mapStateToProps = state => ({
  currentPageName: state.currentPageName,
  focused: state.focused,
});

const mapDispatchToProps = {
  changeAppPage: changePage,
};

Nav.propTypes = {
  currentPageName: PropTypes.string.isRequired,
  changeAppPage: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
