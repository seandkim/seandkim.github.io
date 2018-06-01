import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import '../css/Content.css'

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
    const skelterLabs = <a style={linkStyle} href='https://www.skelterlabs.com/' target="_blank">Skelter Labs</a>
    const squarespace = <a style={linkStyle} href='https://www.skelterlabs.com/' target="_blank">Skelter Labs</a>
    const contactMe = <span style={linkStyle} onClick={this.contactMeClicked}>contact me</span>

    return (
      <div key="about-content" style={{ ...wrapperStyle, ...textStyle }}>
        <h5 style={{ ...textStyle, ...headerStyle }}>
          Hello, I’m Sean.
        </h5>
        <span>
          ...and I do all sorts of things :)
          <br /><br />
          I study Computer Science in Carnegie Mellon University, expecting to graduate on
          May 2019. As a software engineer, I have previously interned at {skelterLabs} and {squarespace}.
          <br /><br />
          I am looking for full time opportunity in Web Application
          backend or full-Stack) and Distributed Systems.

          Feel free to {contactMe} if interested!
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

export default connect(mapStateToProps)(AboutContent);
