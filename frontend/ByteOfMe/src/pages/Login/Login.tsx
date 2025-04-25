import React, { useState } from 'react';

import { Login } from "../../API/api";
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
    const [Username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();
    

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const response = await Login(Username, password);
            if (response.success) {
               console.log("Login successful:", response.data);
               
               navigate("/home");
               window.location.reload();
               
            } else {
                console.log("Login failed:", response.data);
                
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        }
    };

    const handleSignupClick = () => {
        navigate("/");
    }

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="Username">Username:</label>
                    <input
                        type="Username"
                        id="Username"
                        value={Username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit">Login</button>
            </form>

            <div>
            <label htmlFor="">don't have an account?</label>
            <button onClick={handleSignupClick}>Sign Up</button>
            </div>
        </div>
    );
};

export default LoginPage;