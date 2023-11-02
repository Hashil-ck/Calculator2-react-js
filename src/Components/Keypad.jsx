import React from 'react'
import Button from './Button';

function Keypad({onButtonClick}) {
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
            
            label={button}
            onClick={() => onButtonClick(button)}
          />
        ))}
      </div>
    );
  }

export default Keypad