import React, { Component } from 'react';

export default class Door extends Component {
    constructor(props) {
        super(props);

        this.borderStyle = {
            border: "3px solid " + this.props.borderColor,
            borderRadius: "0.5vh",
        }
    }

    render() {
        return (
            <div className="door" style={{ ...this.borderStyle, ...outerDoor }}>
                <div style={{ ...this.borderStyle, ...innerDoor }} />
                <div style={{ ...this.borderStyle, ...doorKnob,
                    backgroundColor: this.props.borderColor  }} />
            </div>
        )
    }
};

const outerDoor = {
    position: 'relative',
    width: "22vh",
    height: "40vh",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const innerDoor = {
    width: '95%',
    height: '98%',
}

const doorKnob = {
    position: 'absolute',
    right: '3px',
    width: '1vh',
    height: '1vh',
    borderRadius: '2vh',
}