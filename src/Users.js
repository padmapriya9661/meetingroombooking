import React from "react";
import Sidebar from "./Sidebar";
const Users = () =>{


return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-auto col-md-3 col-xl-2 p-0'>
                <Sidebar />
            </div>
            <div className='col-auto col-md-9 col-xl-10 '>
                <div className='fs-2 ms-3'>List of Users</div>
                <div className='d-flex flex-row p-2 mt-5'>
                    <button type="button" className='btn btn-secondary' ><i className='fa fa-plus'></i>  Add Users</button>
                    <input className="search ms-5 p-2 rounded"
                        type="text"
                       
                        placeholder="Search"
                    />
                </div>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button
                        type="button"
                        className={`rounded `}
                        > All
                    </button>
                    <button
                        type="button"
                        className={`rounded `}
                        >
                        Active
                    </button>
                    <button
                        type="button"
                        className={`rounded `}
                        >
                            InActive
                    </button>
                   
                </div>


                {/* Display data in Table */}

                <div className='card shadow bg-body rounded mt-5 p-3'>
                   
                        <table className="table table-striped border">
                            <thead>
                                <tr>
                                    {/* <th scope="col">Image</th> */}
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                    <tr >

                                        <td>usrname</td>
                                        <td>email</td>
                                        <td>role</td>
                                        <td>status</td>
                                        <td><i className='fa fa-edit ms-2' style={{ "cursor": "pointer" }} ></i>
                                            <i className='fa fa-trash ms-3'  style={{"cursor":"pointer"}} ></i>
                                        </td>
                                    </tr>
                            </tbody>
                        </table>
                </div>

            </div>
        </div>
    </div>
)

}

export default Users;