import React from 'react'

function Display({input}) {
    return (
      <div className="display">
        

<form>
  
          <input
         
            placeholder='0'
            
            value={input}
            readOnly
          
          />
</form>
      </div>
    );
  }
  

export default Display