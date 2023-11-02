import React from 'react'

function Button({label,onClick}) {
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
      <button className={`${style(label)} button`} onClick={onClick}>
        {label}
      </button>
    );
  }

export default Button