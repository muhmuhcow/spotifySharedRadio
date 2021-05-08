import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import io from "socket.io-client";
import './css/login.css';

const ENDPOINT = 'http://localhost:5000';
const socket = io(ENDPOINT);



const Login = () => {

    const [name,setName] = useState('');

    function handleLogin () {
        console.log(name);
        //send to join channel
        socket.emit('join',{name});
    };

    // //catch something from the join channel
    // connectionSocket.on('join', response =>{
    //     console.log(response);
    //   });

    // //catch something from the playerData channel  
    // connectionSocket.on('playerData', response =>{
    //     if(response.otherPlayer){
         
    //     }
    //   });  

    return (
        <div className='container'>
            <p> Login </p>
            <div>
                <input 
                    placeholder="Name" 
                    className="joinInput" 
                    type="text" 
                    onChange={(event)=>setName(event.target.value)}
                    value={name}
                />
            </div>
            <div>
                <Link 
                to={`/home?name=${name}`}
                onClick={handleLogin()}>
                    <button 
                    value="Submit" 
                    className="joinButton" 
                    type="submit">
                        Submit
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Login;