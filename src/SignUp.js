
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetUsersQuery,  useNewUserMutation} from './API/rtkQuery';
import { NotificationManager } from 'react-notifications';


const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [status, setStatus] = useState('');
    const { refetch } = useGetUsersQuery();
    const [createUser] = useNewUserMutation();
    const handleSave = async () => {
        try {
            const newUser = {
                email: email,
                password,
                name,
                role,
                status,
            };
            await createUser(newUser);
            NotificationManager.success('Account Created Successfully');
            navigate('/');
            refetch();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container card signupcard ">
            <h2>Signup</h2>
            <div class="mb-3 row">
                <label for="name" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-4">
                    <input type="name" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="email" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-4">
                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="password" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-4">
                    <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="role" class="col-sm-2 col-form-label">Role</label>
                <div class="col-sm-4">
                <input type="role" className="form-control" id="role" value={role} onChange={(e) => setRole(e.target.value)} />
                </div>
            </div>
            <div class="mb-3 row">
                <label for="status" class="col-sm-2 col-form-label">Status</label>
                <div class="col-sm-4">
                <input type="status" className="form-control" id="status" value={status} onChange={(e) => setStatus(e.target.value)} />                </div>
            </div>
            <button  type="col-3 button" className="btn btn-secondary" onClick={handleSave}>
                Save
            </button>
            
        </div>
    );
};

export default Signup;


