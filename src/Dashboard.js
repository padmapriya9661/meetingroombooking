import React from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";


const Dashboard = () => {
    return(
      <div class="row">
        <div class="col-2">
          <Sidebar/>
        </div>
        <div class="col-auto col-md-9 col-xl-10">
        <div class="card mt-5 p-5">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Booking made today</a>
    <button className='fa fa-file-text-o ms-3'  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Booking for today</a>
    <button className='fa fa-file-text-o ms-3' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Total booking</a>
    <button className='fa fa-file-text-o ms-3' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    {/* <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Booking made today</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Booking for today</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Total booking</a>
        </li>
      </ul>
    </div> */}
  </div>
</nav>
<div class="card-body row">
<div className='col-4'>
                            <div className='card' style={{ height: "35rem" }}>
                                <figure className="text-start ms-4 mt-3">
                                    <blockquote className="blockquote" style={{ "fontWeight": "bold" }}>
                                        <p>Latest Bookings</p>
                                    </blockquote>
                                </figure>
                                <div className='ms-4 me-4'>
                                    
                                </div>
                            </div>
                        </div>
<div className='col-4'>
  <div className='card' style={{ height: "35rem" }}>
  <figure className="text-start  ms-4 mt-3">
                                    <blockquote className="blockquote" style={{ "fontWeight": "bold" }}>
                                        <p>Reservations</p>
                                    </blockquote>
                                </figure>
                                <div className='row ms-4 me-4'>
                                    <div className="col-2 mb-4">
                                        <label className="fs-5">Date</label>
                                    </div>
                                    <div className="col-10 mb-4">
                                        <input className="form-control form-control-sm" type="date"></input>
                                    </div>
                                </div>
  </div>
</div>
<div className='col-4'>
                            <div className='card' style={{ height: "35rem" }}>
                                <figure className="text-start  ms-4 mt-3">
                                    <blockquote className="blockquote" style={{ "fontWeight": "bold" }}>
                                        <p>Quick Links</p>
                                    </blockquote>
                                </figure>
                                <Link to="/addbooking" className='ms-5'>+ Add Booking</Link>
                                <Link to="/addroom" className='ms-5'>+ Add Room</Link>
                                <Link to="/bookings" className='ms-5'>View Bookings</Link>
                                <Link to="/rooms" className='ms-5 mb-5'>View Rooms</Link>
                            </div>
                        </div>
            </div>

        </div>

        </div>
        

      </div>
      
        
        
        
    )
    


} 
export default Dashboard;