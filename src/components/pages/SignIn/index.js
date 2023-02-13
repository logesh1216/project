import { event } from 'jquery';
import React,{useState} from 'react';
import{Link} from'react-router-dom';
import './index.scss';
function Login() {
    const[state,setState]=useState(
        {
                username:'',
                password:''

        }
    )
    const {username,password}=state;
    
        const handlechange=(event,id)=>{
            console.log('event:',event.target.value,id);
            setState({
                state,
                [id]:event.target.value
            })
        }
        const handlesubmit=(event)=>{
            const{username,password}=state;
            
            console.log('username,username');
            console.log('password,password')
        }
    return (
     <div className="center">
        <div className='login-container'>
            <h1>Login</h1><br></br>
                <input type="text" placeholder='Username'
                  value={username} 
                  onChange={(event)=>handlechange(event,'username')}></input><br></br>

                <input type="text" placeholder='Password'
                  value={password}
                  onChange={(event)=>handlechange(event,'password')}></input><br></br>

                 <button type="submit" value="submit" onClick={(event)=>handlesubmit()}>SUBMIT</button><br></br><br></br>
                 <Link to='/forget' className='f-psw'>Forget Password</Link>
                 <Link to='/signup' className='s-up'>signup</Link>     
           

         </div>
    </div>
 
    )
}

export default Login;