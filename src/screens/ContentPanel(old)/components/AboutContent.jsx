import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Content.css';

class AboutContent extends Component {
  contactMeClicked() {
    console.log('contact me clicked');
  }

  render() {
    const skelterLabs = (
      <a className="link" href="https://www.skelterlabs.com/" target="_blank">Skelter Labs</a>
    );
    const squarespace = (
      <a className="link" href="http://squarespace.com/" target="_blank">Squarespace</a>
    );
    const microsoft = (
      <a className="link" href="http://microsoft.com/" target="_blank">Microsoft</a>
    );
    const contactMe = (
      <a className="link" href="mailto:seandkim14@gmail.com" target="_blank">Contact Me</a>
    );
    // TODO: make custom "Contact Me" animation
    // const contactMe = <span className="link" onClick={this.contactMeClicked}>contact me</span>;

    return (
      <div id="AboutContent" className="Content">
        <div className="content-header">
          <h5>Hello, I’m Sean.</h5>
        </div>
        <div className="content-body">
          {/* <div>...and I do all sorts of stuff :)</div> */}
          <div>
            I study Computer Science at Carnegie Mellon University, expecting to graduate in
            May 2019. As a software engineer, I interned at {skelterLabs} and {squarespace}.
            I will be joining {microsoft} next August.
          </div>
          <div>
            Feel free to {contactMe} if you want!
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentPageName: state.currentPageName,
  focused: state.focused,
  media: state.media,
});

export default connect(mapStateToProps)(AboutContent);
