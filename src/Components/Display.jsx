import React from 'react'

function Display(props) {
    return (
      <div className="display">
        

<form>
  
          <input
         
            placeholder='0'
            
            value={props.input}
            readOnly
          
          />
</form>
      </div>
    );
  }
  

export default Display