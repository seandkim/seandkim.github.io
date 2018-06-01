import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeFocus } from './../actions';

import AboutDoor from '../assets/door/aboutme_door.png';
import ProjectsDoor from '../assets/door/projects_door.png';
import BigFishDoor from '../assets/door/bigfish_door.png';

const doorWrapperStyle = {
  width: '160px',
  maxHeight: '320px',
  height: '50vh',
};

const doorStyle = {
  backgroundImage: `url(${AboutDoor})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  width: '100%',
  height: '100%',
};

class Door extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayConstructionMessage: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentPageName !== nextProps.currentPageName) {
      this.setState({ displayConstructionMessage: false });
    }
  }

  render() {
    const { currentPageName } = this.props;
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

    return (
      <div>
        <div className="Door" style={doorWrapperStyle} onClick={this.onClick.bind(this, currentPageName)}>
          <div style={doorStyle1} />
        </div>
        {this.state.displayConstructionMessage &&
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
    const constructionPages = ['projects', 'big fish'];
    if (constructionPages.indexOf(currentPageName) >= 0 || this.props.media === 'small') {
      this.setState({ displayConstructionMessage: true })
      return;
    }

    this.props.changeFocus(true)
  }
}



Door.propTypes = {
  currentPageName: PropTypes.string.isRequired,
  changeFocus: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  currentPageName: state.currentPageName,
});

const mapDispatchToProps = {
  changeFocus,
};

export default connect(mapStateToProps, mapDispatchToProps)(Door);
