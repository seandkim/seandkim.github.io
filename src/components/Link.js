import PropTypes from 'prop-types';
import React, { Component } from 'react';


export default class Link extends Component {
  render() {
    const { href, style } = this.props;

    return (
      <a href={href} style={style} target="_blank">
        {this.props.children}
      </a>
    )
  }
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  style: PropTypes.object,
  height: PropTypes.string,
};

Link.defaultProp = {
  style: {},
}