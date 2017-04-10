import React from 'react';
import ReactDOM from 'react-dom';

export default class ThemedDecorations extends React.Component {
  render(){
    const childrenComp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      });
    });
    return (
      <div>
        {childrenComp}
      </div>
    );
  }
}
