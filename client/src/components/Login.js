import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {usernameAdded} from '../actions';
import store from '../store';

const Login = () => {

    const [name,setName] = useState('');

    const handleLogin = () => {
        if (!name) {
            console.log(name);
            store.dispatch(usernameAdded(name));
        }
    };

    return (
        <div>
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