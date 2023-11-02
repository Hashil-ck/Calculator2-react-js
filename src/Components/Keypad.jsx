import React from 'react'
import Button from './Button';

function Keypad(props) {
    const buttons = [

      "C",
      "<",
      "%",
      "/",
      "7",
      "8",
      "9",
      
      "*",
      "4",
      "5",
      "6",
      
      "-",
      "1",
      "2",
      "3",
      
      "+",
      ".",
      "0",
      "=",
      
    ];
  
    return (
      <div className="keypad">
        {buttons.map((button) => (
          <Button
            key={button}
            label={button}
            onClick={() => props.onButtonClick(button)}
          />
        ))}
      </div>
    );
  }

export default Keypad