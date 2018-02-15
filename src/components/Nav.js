import React, { Component } from 'react';
import { connect } from 'react-redux';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.pages = ['about me', 'projects', 'big fish']; // change to context
  }

  render() {
    const { currentPageName, focused } = this.props;
    const tabs = [];
    for (var i=0; i<this.pages.length; i++) {
      const thisPage = this.pages[i];
      let thisTabStyle = { ...menuTabStyle };
      if (i === this.pages.indexOf(currentPageName)) {
        thisTabStyle['textDecoration'] = 'underline';
      }
      tabs.push(<div style={thisTabStyle} key={i}>{thisPage}</div>);
    }

    return (
      <div className="Nav" style={ menuWrapperStyle }>
        { tabs }
      </div>
    );
  }
}

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

const mapStateToProps = state => ({
  currentPageName: state.currentPageName,
  focused: state.focused,
  media: state.media,
});

const mapDispatchToProps = {
  // onPageChange: changePage,
  // onDoorClick: () =>
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);