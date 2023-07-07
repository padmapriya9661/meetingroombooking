import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';

const Bookings = () => {
    

    

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-auto col-md-3 col-xl-2 p-0'>
                    <Sidebar />
                </div>
                <div className='col-auto col-md-9 col-xl-10 '>
                    <div className='fs-2 ms-3'>List of Bookings</div>
                    <div className='d-flex flex-row p-2 mt-5'>
                        <button type="button" className='btn btn-secondary' ><i className='fa fa-plus'></i>  Add Booking</button>
                        <input className="search ms-5 p-2 rounded"
                            type="text"
                            placeholder="Search"
                        />
                    </div>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button
                            type="button"
                            className="rounded"
                            > All
                        </button>
                        <button
                            type="button"
                            className="rounded"
                            >
                            Pending
                        </button>
                        <button
                            type="button"
                            className="rounded"
                            >
                            Confirmed
                        </button>
                        <button
                            type="button"
                            className="rounded"
                           >
                            Cancelled
                        </button>
                    </div>


                    {/* Display data in Table */}

                    <div className='card shadow bg-body rounded mt-5 p-3'>
                        
                    </div>

                </div>
            </div>
        </div>
    )

}

export default Bookings;