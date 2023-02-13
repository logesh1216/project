import React from 'react';

import './index.scss';

function forget() {
  return (
    <center>
    <div classname="center">
        <div className='forget-container'>
            <h1>FORGET</h1><br></br>
                <input type="text" placeholder='email'></input><br></br>
                <input type="text" placeholder='Password'></input><br></br>
                <input type="text" placeholder='new password'></input><br></br>
                <input type="submit" value="submit"></input><br></br>
        </div>
    </div>
    </center>
   
              
  )
}
export default forget;