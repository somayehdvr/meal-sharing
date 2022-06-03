import React from 'react';
import '../App.css';

export default function BorderComponent(props) {
    const divStyle = {
        border: props.color + " 3px solid",
      };
    return (
        <div className={"borderComponent"} style={divStyle}>
            {props.children}
        </div>
    )
}