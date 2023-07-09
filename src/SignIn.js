import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetUsersQuery } from './API/rtkQuery'
import { NotificationManager } from 'react-notifications';
import './App.css';



const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { data: users = [], isLoading } = useGetUsersQuery();

    const handleLogin = () => {
        const foundUser = users.find((user) => user.email === email && user.password === password);
        if (foundUser) {
            if (foundUser.role === 'admin') {
                NotificationManager.success('Admin Logged in successfully');
                navigate('/dashboard');
            } else if (foundUser.role === 'user') {
                NotificationManager.success('User Logged in successfully');
                navigate('/user', { state: { user: foundUser } });
            } else {
                NotificationManager.error('Enter valid credentials');
            }
        } else {
            NotificationManager.error('Enter valid credentials');
        }
    };
    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div className='container logincard'>
            <h2>Login</h2>
            <div className="col-4 mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" value={email}
                    onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="col-4 mb-3">
                <label for="password" className="form-label" >Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" value={password}
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="col-4 mb-3">
                <p className="links" onClick={() => navigate('/signup')}>Don't have an account yet? Sign up</p>
            </div>
            <button type="col-3 submit" className="btn btn-secondary" onClick={handleLogin}>Login</button>
        </div>
    );
};
export default Login;