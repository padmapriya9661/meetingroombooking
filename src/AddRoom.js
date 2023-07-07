import React from "react";
import Sidebar from "./Sidebar";

const AddRoom = () => {
    return (
        <div className="container-fluid">
            <div className='row'>
                <div className='col-auto col-md-3 col-xl-2 p-0'>
                    <Sidebar />
                </div>
                <div className='col-auto col-md-9 col-xl-10 '>
                    <div className='fs-2 ms-3 font-weight-bold'>Add a Meeting Room</div>
                    <div className="card shadow rounded mt-5 p-4">
                    <div className="row ">
                        <div className="col-2 mb-4">
                            <label className="fs-5">Title</label>
                        </div>
                        <div className="col-10 mb-4">
                            <input className="form-control" type="text" ></input>
                        </div>
                        <div className="col-2 mb-4">
                            <label className="fs-5">Capacity</label>
                        </div>
                        <div className="col-10  mb-4">
                            <input className="form-control" type="number" ></input>
                        </div>
                        <div className="col-2 mb-4">
                            <label className="fs-5">Description</label>
                        </div>
                        <div className="col-10 mb-4">
                            <textarea class="form-control" id="exampleFormControl" rows="3" ></textarea>
                        </div>
                        <div className="col-2 mb-4">
                            <label className="fs-5">Book For</label>
                        </div>
                        <div className="col-10 mb-4">
                            <input className=""
                                type="checkbox"
                                value="multipledays"
                            />
                            <label className="ms-2 fs-5">Multiple-days</label>
                            <input className="ms-4"
                                type="checkbox"
                                value="halfday"
                               
                            />
                            <label className="ms-2 fs-5">Half-day</label>
                            <input className="ms-4"
                                type="checkbox"
                                value="hour"
                            />
                            <label className="ms-2 fs-5">Hour</label>
                        </div>
                        <div className="col-2 mb-4">
                            <label className="fs-5">Price per day</label>
                        </div>
                        <div className="col-10 mb-4">
                            <div className="input-group">
                                <div className="input-group-text">$</div>
                                <input className="form-control" type="text" />
                            </div>
                        </div>
                        <div className="col-2 mb-4">
                            <label className="fs-5">Status</label>
                        </div>
                        <div className="col-10 mb-4">
                            <input className="form-control" type="text" ></input>
                        </div>
                        <div className="col-2 "></div>
                        <div className="col-10 mt-3 d-grid gap-2 d-md-flex">
                            <button type="button" className="btn btn-secondary " >Save</button>
                            <button type="button" className="btn " >Cancel</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddRoom;