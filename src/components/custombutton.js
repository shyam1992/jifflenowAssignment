import React from 'react';

export const Button = (props) => {
  return <button className ="customBtn" onClick={()=>props.onClick()}>{props.text}</button>
}