import React, { useState , useEffect} from "react";
import Sidebar from "./Sidebar";
import {useAddusersMutation} from './API/rtkQuery'
import { useNavigate } from "react-router-dom";

const AddUser = () =>{
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [status, setStatus] = useState('');
    const [addusers, error, isLoading] = useAddusersMutation();
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        let timer;
        if (successMessage) {
          timer = setTimeout(() => {setSuccessMessage("");}, 1000);
        }
        return () => clearTimeout(timer);
      }, [successMessage]);

    const handleAddUser = (e) => {
        e.preventDefault();
        const newUser = {
            username,
            email,
            role,
            status
        };
        addusers(newUser).unwrap().then((res) => {
            console.log("Users", res)
            setSuccessMessage("User added successfully!");
            window.location.reload();
        })
    }
    
    return (
        <div className="container-fluid">
            <div className='row'>
                <div className='col-auto col-md-3 col-xl-2 p-0'>
                    <Sidebar />
                </div>
                <div className='col-auto col-md-9 col-xl-10 '>
                    {successMessage && <div className="mt-3 alert alert-success">{successMessage}</div>}
                    <div className='fs-2 ms-3'>Add a User</div>
                    <div className="card shadow rounded mt-5 p-4">
                    <div className="row ">
                        <div className="col-2 mb-4">
                            <label className="fs-5">UserName</label>
                        </div>
                        <div className="col-10 mb-4">
                            <input className="form-control" type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                        </div>
                        <div className="col-2 mb-4">
                            <label className="fs-5">Email</label>
                        </div>
                        <div className="col-10  mb-4">
                            <input className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        <div className="col-2 mb-4">
                            <label className="fs-5">Role</label>
                        </div>
                        <div className="col-10 mb-4">
                        <input className="form-control" type="text" value={role} onChange={(e) => setRole(e.target.value)}></input>
                        </div>
                        <div className="col-2 mb-4">
                            <label className="fs-5">Status</label>
                        </div>
                        <div className="col-10 mb-4">
                            <input className="form-control" type="text" ></input>
                        </div>
                        <div className="col-2 "></div>
                        <div className="col-10 mt-3 d-grid gap-2 d-md-flex">
                            <button type="button" className="btn btn-secondary" onClick={handleAddUser}>Save</button>
                            <button type="button" className="btn btn-dark" onClick={()=>navigate("/users")}>Cancel</button>
                        </div>
                    </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}
export default AddUser;