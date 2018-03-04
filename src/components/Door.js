import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeFocus } from './../actions';

import AboutDoor from '../images/door/aboutme_door.png';
import ProjectsDoor from '../images/door/projects_door.png';
import BigFishDoor from '../images/door/bigfish_door.png';

const doorWrapperStyle = {
  width: '20vw',
  height: '40vh',
};

const doorStyle = {
  backgroundImage: `url(${AboutDoor})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  width: '100%',
  height: '100%',
};

const turnWhite = {
  filter: 'brightness(0) invert(100%)',
};

class Door extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notDone: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentPageName !== nextProps.currentPageName) {
      this.setState({ notDone: false });
    }
  }

  render() {
    const { currentPageName, media, color } = this.props;
    let imageName;
    switch (currentPageName) {
    case 'about me':
      imageName = AboutDoor;
      break;
    case 'projects':
      imageName = ProjectsDoor;
      break;
    case 'big fish':
      imageName = BigFishDoor;
      break;
    default:
      imageName = AboutDoor;
      break;
    }

    let doorStyle1 = { ...doorStyle, backgroundImage: `url(${imageName})` };
    if (media === 'small') {
      doorStyle1 = { ...doorStyle1, ...turnWhite };
    }

    return (
      <div>
        <div className="Door" style={doorWrapperStyle} onClick={this.onClick.bind(this, currentPageName)}>
          <div style={doorStyle1} />
        </div>
        {this.state.notDone &&
          <div style={{
            position: 'absolute', left: 0, right: 0, top: '40%',
            margin: 'auto', fontSize: '60px', color: this.props.color,
            transform: 'rotate(-20deg)', fontFamily: 'Satisfy', textAlign: 'center',
          }}>
            Under <br /> Construction
          </div>}
      </div>
    );
  }

  onClick(currentPageName) {
    const notDonePages = ['projects', 'big fish'];
    if (notDonePages.indexOf(currentPageName) >= 0 || this.props.media === 'small') {
      this.setState({ notDone: true })
      return;
    }

    this.props.changeFocus(true)
  }
}



Door.propTypes = {
  currentPageName: PropTypes.string.isRequired,
  media: PropTypes.string.isRequired,
  changeFocus: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  currentPageName: state.currentPageName,
  media: state.media,
});

const mapDispatchToProps = {
  changeFocus,
};

export default connect(mapStateToProps, mapDispatchToProps)(Door);
