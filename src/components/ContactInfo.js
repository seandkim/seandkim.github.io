import React, { Component } from 'react';

const wrapperStyle = {
  width: '300px',
  height: '100px',
  border: '2px solid red',
  fontSize: '60px',
  color: 'white',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}

export default class ContactInfo extends Component {
  render() {
    return (
      <div className='ContactInfo' style={ wrapperStyle }>
        <div><i className="fa fa-envelope"></i></div>
        <div><i className="fa fa-file-alt"></i></div>
        <div><i className="fa fa-github"></i></div>
      </div>
    );
  }
}