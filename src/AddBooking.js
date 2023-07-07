import React from "react";
import Sidebar from "./Sidebar";

const AddBooking = () => {
    return(
        <div className="container-fluid">
            <div className='row'>
                <div className='col-auto col-md-3 col-xl-2 p-0'>
                <Sidebar />
                </div>
                <div className='col-auto col-md-9 col-xl-10 '>
                    <div className='fs-2 ms-3 font-weight-bold'>Add a Booking</div>
                    <div className="card shadow rounded ms-3 p-4 mt-4">
                            <div className="row">
                                <div className='fs-4 mb-5' >Client Details</div>
                                <div className="col-2 mb-4">
                                    <label className="fs-5">Name</label>
                                </div>
                                <div className="col-10 mb-4">
                                <input className="form-control" type="text" ></input>
                                </div>
                                <div className="col-2 mb-4">
                                    <label className="fs-5">Email</label>
                                </div>
                                <div className="col-10  mb-4">
                                    <input className="form-control" type="text" ></input>
                                </div>
                                <div className="col-2 mb-4">
                                    <label className="fs-5">Phone</label>
                                </div>
                                <div className="col-10 mb-4">
                                    <input className="form-control" type="text" ></input>
                                </div>
                                <div className="col-2 mb-4">
                                    <label className="fs-5">Company</label>
                                </div>
                                <div className="col-10 mb-4">
                                <input className="form-control" type="text" ></input>
                                </div>
                                <div className="col-2 mb-4">
                                    <label className="fs-5">Address</label>
                                </div>
                                <div className="col-10 mb-4">
                                <input className="form-control" type="text" ></input>
                                </div>
                                <div className="col-2 mb-4">
                                    <label className="fs-5">City</label>
                                </div>
                                <div className="col-10 mb-4">
                                <input className="form-control" type="text" ></input>
                                </div>
                                <div className="col-2 mb-4">
                                    <label className="fs-5">State</label>
                                </div>
                                <div className="col-10 mb-4">
                                <input className="form-control" type="text" ></input>
                                </div>
                                <div className="col-2 mb-4">
                                    <label className="fs-5">Zip</label>
                                </div>
                                <div className="col-10 mb-4">
                                <input className="form-control" type="text" ></input>
                                </div>
                                <div className="col-2 mb-4">
                                    <label className="fs-5">Country</label>
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

export default AddBooking;