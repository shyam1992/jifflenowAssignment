import React from 'react';

export const Button = (props) => {
  if(props.enabled){
    return <button className ="customBtn" onClick={()=>props.onClick()}>{props.text}</button>
  }else{
    return <button className ="customBtn" disabled="disabled" onClick={()=>props.onClick()}>{props.text}</button> 
  }
}