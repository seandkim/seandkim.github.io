import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Door from './Door';
import ImageFiller from './ImageFiller';

export default class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // TODO change to parent's state and create getter and setter
            currentPage: 'about me',
            focused: false,
        }
    }

    render() {
        const { currentPage } = this.state

        const colorStyle1 = { ...colorStyle, 'backgroundColor': this.context.colors.warmBlue };
        const doorNameStyle1 = { ...doorNameStyle, 'color': this.context.colors.darkGray };
        const doorBorderColor = this.context.colors.darkGray

        return (
            <div className="content" style={ wrapperStyle }>
                <ImageFiller imageName="grey-linen" />
                <div style={ colorStyle1 }>
                    <div style={ doorWrapperStyle }>
                        <div style={doorNameStyle1}>{currentPage}</div>
                        <Door type="about me" borderColor={doorBorderColor}/>
                        <div style={ doorNameStyle1 }>Click to Enter</div>
                    </div>
                </div>
            </div>
        );
    }
}

Content.contextTypes = {
    colors: PropTypes.object,
}

const wrapperStyle = {
    position: 'relative',
    flexGrow: 1,
}

const colorStyle = {
    backgroundColor: null, // warm blue, specified in render
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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