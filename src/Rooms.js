import React from "react";
import Sidebar from "./Sidebar";



const Rooms=()=>{
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-auto col-md-3 col-xl-2 p-0'>
                    <Sidebar />
                </div>
                <div className='col-auto col-md-9 col-xl-10 '>
                    <div className='fs-2 ms-3'>List of Meeting Rooms</div>
                    <div className='d-flex flex-row p-2 mt-5'>
                        <button type="button" className='btn btn-secondary' ><i className='fa fa-plus'></i>  Add Room</button>
                        <input className="search ms-5 p-2 rounded"
                            type="text"
                            placeholder="Search"
                        />
                    </div>
                    {/* Display data in Table */}

                    <div className='card shadow bg-body rounded mt-5 p-3'>
                  
                            <table className="table table-striped border">
                                <thead>
                                    <tr>
                                        {/* <th scope="col">Image</th> */}
                                        <th scope="col">Room</th>
                                        <th scope="col">Capacity</th>
                                        <th scope="col">Bokings</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                     
                                        <tr>
                                            {/* <td></td> */}
                                            <td>title</td>
                                            <td>capacity</td>
                                            <td></td>
                                            <td>status</td>
                                            <td><i className='fa fa-edit ms-2' style={{ "cursor": "pointer" }} ></i>
                                                <i className='fa fa-trash ms-3' style={{ "cursor": "pointer" }} ></i>
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

export default Rooms;