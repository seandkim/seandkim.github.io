import Link from '../Link'
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../styles/Content.css';

// import SkelterLabsLogo from '../../images/logo/Skelter-Labs-Vertical.png';
// import SquareSpaceLogo from '../../images/logo/squarespace-logo-stacked-black.png';
import SkelterLabsLogo from '../../images/logo/Skelter-Labs.png';
import SquareSpaceLogo from '../../images/logo/squarespace-logo-horizontal-black.png';

const logoDivStyle = {
  width: '30%',
  height: '30%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

const logoImgStyle = {
  width: '200px',
  height: 'auto',
  verticalAlign: 'text-bottom',
  padding: '0px 10px',
}

class AboutContent extends Component {
  render() {
    const { textColor, headerFontFamily } = this.props;
    const wrapperStyle = {
      display: 'flex',
      flexDirection: 'column',
      padding: '8vw',
      overflowY: 'scroll',
    };
    const headerStyle = {
      fontFamily: headerFontFamily,
      color: textColor,
      marginBottom: '20px',
      fontSize: '80px',
      fontWeight: '100',
    };
    const contentStyle = {
      color: textColor,
      fontFamily: 'Nunito',
      lineHeight: '1.8',
      fontSize: '20px',
      textAlign: 'left',
      textIndent: '40px'
    };
    const blockStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '30px 0px',
    };
    return (
      <div className="Content entering" style={wrapperStyle}>
        <div className="header" style={headerStyle}>
          Hello, I’m Sean <Link href="http://onepiece.wikia.com/wiki/Will_of_the_D.">D</Link> Kim.
        </div>
        <div className="body" style={contentStyle}>
          <div style={{ ...blockStyle, textIndent: '0px' }}>
            <img style={{ marginBottom: '20px' }} src="https://i.imgur.com/mEPWCqq.gif" />
            <div>Except it is not :)</div>
          </div>
          <div style={blockStyle}>
            {/* this div wrap prevents flex box alignment */}
            <div>
              I study <b>Computer Science</b> in <b>Carnegie Mellon University</b>, expecting to graduate on
              May 2019. Currently I am on a gap semester,
              interning at
              <a href="https://www.skelterlabs.com/" target="_blank">
                <img style={logoImgStyle} src={SkelterLabsLogo} />
              </a>
              as a software engineer.
              I will be in New York this upcoming summer,
              interning at
              <a href="https://www.squarespace.com/" target="_blank">
                <img style={logoImgStyle} src={SquareSpaceLogo} />
              </a>
              as a site reliability engineer.
            </div>
          </div>
          <div style={blockStyle}>
            <div>
              I am looking for <b>full time opportunity</b> for fall 2019
              in <b>Web Application</b> (backend or full-Stack) and <b>Distributed Systems</b>.
            </div>
          </div>
        </div>
      </div>
    );
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
