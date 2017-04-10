import React from 'react';
import ReactDOM from 'react-dom';

export default class Invitation extends React.Component {
  render(){
    return (
      <div>
        <h1>You've been invited!</h1>
          <ul>
            <li>{this.props.children}</li>
          </ul>
      </div>
    );
  }
}
