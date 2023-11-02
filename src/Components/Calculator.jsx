import React, { useState } from "react";
import Keypad from "./Keypad";
import Display from "./Display";


function Calculator() {
  const [input, setInput] = useState("");

  function handleButtonClick(button) {
    if (!isNaN(button) || button === ".") {
      setInput(input + button);
    }
    else if (["+", "-", "*", "/",].includes(button)) {
      setInput(input + button);

    }
    else if (button === "=") {
      calculate();
    }
    else if(button === "C"){
      setInput("");

    }
    else if(button === "%"){
      
        percent();
    }
    else if(button === "<"){
      del();
      
  }
  }

  const del=() =>{
    const dlt = input?.slice(0,-1);
      setInput(dlt);
      return del
  }
  

  function percent(){
    const per = input/100
    setInput(`${per}`)
  }
  function calculate() {
   if(input != 0){
    try {
      const result = eval(input)
      setInput(`${result}`);
    } catch (error) {
      setInput("Invalid Entry!!" );
    }
   }else{
    setInput("")
   }
  }

  return (
    <div className="calculator   justify-content-center align-items-center">
      <Display
        input={input}
      />
      <Keypad onButtonClick={handleButtonClick} />
    </div>
  );
}

export default Calculator;
