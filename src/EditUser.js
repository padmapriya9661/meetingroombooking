import React from "react";
import Sidebar from "./Sidebar";

const EditUser = () =>{
    return (
        <div className="container-fluid">
        <div className='row'>
            <div className='col-auto col-md-3 col-xl-2 p-0'>
                <Sidebar />
            </div>
            <div className='col-auto col-md-9 col-xl-10 '>
                <div className='fs-2 ms-3 font-weight-bold'>Edit User</div>
                <div className="card shadow rounded mt-5 p-4">
                <div className="row ">
                    <div className="col-2 mb-4">
                        <label className="fs-5">UserName</label>
                    </div>
                    <div className="col-10 mb-4">
                        <input className="form-control form-control-lg" type="text" ></input>
                    </div>
                    <div className="col-2 mb-4">
                        <label className="fs-5">Email</label>
                    </div>
                    <div className="col-10  mb-4">
                        <input className="form-control form-control-lg" type="email" ></input>
                    </div>
                    <div className="col-2 mb-4">
                        <label className="fs-5">Role</label>
                    </div>
                    <div className="col-10 mb-4">
                    <input className="form-control form-control-lg" type="text" ></input>
                    </div>
                    <div className="col-2 mb-4">
                        <label className="fs-5">Status</label>
                    </div>
                    <div className="col-10 mb-4">
                        <input className="form-control form-control-lg" type="text" ></input>
                    </div>
                    <div className="col-2 "></div>
                    <div className="col-10 mt-3 d-grid gap-2 d-md-flex">
                        <button type="button" className="btn btn-secondary" >Save</button>
                        <button type="button" className="btn" >Cancel</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
)
}
export default EditUser;




