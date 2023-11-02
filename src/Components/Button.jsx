import React from 'react'

function Button(props) {
  const style = btn =>{
  const className = {
    '=':'equals',
    '*':'operators',
    '+':'operators',
    '-':'operators',
    '%':'operators',
    'C':'operators',
    '<':'operators',
    '/':'operators',
  }
  return className[btn]
}

  
    return (
      <button className={`${style( props.label)} button`} onClick={props.onClick}>
        {props.label}
      </button>
    );
  }

export default Button