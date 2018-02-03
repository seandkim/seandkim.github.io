import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Door from './Door';

export default class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // TODO change to parent's state and create getter and setter
            mediaQuery: this.props.mediaQuery,
            currentPage: 'about me',
            focused: false,
        }
    }

    render() {
        const { currentPage } = this.state

        const textColor = this.props.mediaQuery === "small" ? 'white' : this.context.colors.darkGray;
        const doorNameStyle1 = { ...doorNameStyle, 'color': textColor };
        return (
            <div className="Content" style={wrapperStyle}>
                <div style={doorWrapperStyle}>
                    <div style={doorNameStyle1}>{currentPage}</div>
                    <Door type="about me" borderColor={textColor}
                        onClick={this.props.handleDoorClick}/>
                    <div style={doorNameStyle1}>Click to Enter</div>
                </div>
            </div>
        );
    }
}

Content.propTypes = {
    mediaQuery: PropTypes.string.isRequired,
    currentPage: PropTypes.string.isRequired,
    focused: PropTypes.bool.isRequired,
    handleDoorClick: PropTypes.func.isRequired,
};

Content.contextTypes = {
    colors: PropTypes.object,
}

const wrapperStyle = {
    position: 'relative',
}

const doorWrapperStyle = {
    height: '60vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
}

const doorNameStyle = {
    fontFamily: 'Satisfy',
    fontSize: '40px',
    textTransform: "capitalize",
    color: null, // darkGray, specified in render
}