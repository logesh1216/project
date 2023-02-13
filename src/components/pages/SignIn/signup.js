import React from 'react';

import './index.scss';

function signup() {


    return (
        <div className="center">

            <div className='signup-container'>
                <h1>signup</h1><br></br>
                    <input type="text" placeholder='email'></input><br></br>
                    <input type="text" placeholder='Username'></input><br></br>
                    <input type="text" placeholder='Password'></input><br></br>
                    <input type="text" placeholder='confrim password'></input><br></br>
                    <input type="submit" value="submit"></input><br></br>
            </div>
        </div>
   
    )
}
export default signup;