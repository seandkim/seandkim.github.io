import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// import SkelterLabsLogo from '../../assets/logo/Skelter-Labs.png';
// import SquareSpaceLogo from '../../assets/logo/squarespace-logo-horizontal-black.png';

// const logoImgStyle = {
//   width: '200px',
//   height: 'auto',
//   verticalAlign: 'text-bottom',
// }

const wrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  padding: '30px',
  overflowY: 'scroll',
};

const headerStyle = {
  fontWeight: '700',
  fontStyle: 'italic',
}

const textStyle = {
  color: 'white',
  fontFamily: 'Raleway',
  fontWeight: '300',
  lineHeight: '1.8',
  fontSize: '20px',
  textAlign: 'left',
};

const linkStyle = {
  color: 'white',
  whiteSpace: 'nowrap',
  textDecoration: 'none',
}

class AboutContent extends Component {
  render() {
    return (
      <div style={{ ...wrapperStyle, ...textStyle }}>
        <h5 style={{ ...textStyle, ...headerStyle }}>
          Hello, I’m Sean.
        </h5>
        <span>
          ...and I do all sorts of things :)
          <br /><br />
          I study Computer Science in Carnegie Mellon University expecting to graduate on
          May 2019. As a software engineer, I have previously interned in
          Skelter Labs and Squarespace.
          <br /><br />
          I am looking for full time opportunity in Web Application
          backend or full-Stack) and Distributed Systems.

          Feel free to <a style={linkStyle} href='mailto:sdk1@andrew.cmu.edu' target="_blank">contact me</a>if interested!
        </span>
      </div>
    );
  }

  contactMeClicked() {
    console.log('contact me clicked');
  }
}

AboutContent.propTypes = {
  currentPageName: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired,
  media: PropTypes.string.isRequired,
};

AboutContent.contextTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutContent);
