import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let success;
        if (isLogin) {
            success = await login(email, password);
        } else {
            success = await register(name, email, password);
        }

        if (success) {
            navigate('/dashboard'); // Redirect to dashboard on success
        }
    };

    return (
        <div>
            <h2>{isLogin ? 'Login' : 'Register'}</h2>
            <form onSubmit={handleSubmit}>
                {!isLogin && (
                    <div>
                        <label>Name:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                )}
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
            </form>
            <p>
                {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                <button onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? 'Register' : 'Login'}
                </button>
            </p>
        </div>
    );
}

export default AuthPage;