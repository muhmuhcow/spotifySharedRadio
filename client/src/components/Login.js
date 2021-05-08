import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [name,setName] = useState('');

    const handleLogin = () => {
            console.log(name);
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