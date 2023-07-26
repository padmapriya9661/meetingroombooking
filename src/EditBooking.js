import React from "react";
import Sidebar from "./Sidebar";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {usePutbookingMutation, useRoomsQuery} from './API/rtkQuery'




const EditBooking = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { booking } = location.state;
    const { data: roomData, error: Error } = useRoomsQuery();
    const [heading, setHeading] = useState(booking?.heading);
    const [date, setDate] = useState(booking?.date);
    const [capacity, setCapacity] = useState(booking?.capacity);
    const [total, setTotal] = useState(booking?.total);
    const [bookfor, setBookFor] = useState(booking?.bookfor);
    const [ppday, setPPDay] = useState(booking?.ppday);
    const [status, setStatus] = useState(booking?.status);
    const [name, setName] = useState(booking?.users[0]?.name);
    const [email, setEmail] = useState(booking?.users[0]?.email);
    const [phone, setPhone] = useState(booking?.users[0]?.phone);
    const [company, setCompany] = useState(booking?.users[0]?.company);
    const [address, setAddress] = useState(booking?.users[0]?.address);
    const [city, setCity] = useState(booking?.users[0]?.city);
    const [state, setState] = useState(booking?.users[0]?.state);
    const [zip, setZip] = useState(booking?.users[0]?.zip);
    const [country, setCountry] = useState(booking?.users[0]?.country);
    const [putbooking, { isLoading }] = usePutbookingMutation();
    const [findRoom, setFindRoom] = useState('');
    const [step, setStep] = useState(1);
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        let timer;
        if (successMessage) {
            timer = setTimeout(() => {setSuccessMessage("");}, 1000);
        }
        return () => clearTimeout(timer);
    }, [successMessage]);

    const filteredRooms = roomData?.filter((response) =>
        response.title.toLowerCase().includes(findRoom.toLowerCase())
    )


    const handleEditForm = (e) => {
        e.preventDefault();
        const updatedBooking= { ...booking, heading, date, capacity, total, bookfor, ppday, status,
            users:[{name, phone, email,address, company, city, state, country, zip}]};
            putbooking(updatedBooking).unwrap().then((response) => {setSuccessMessage("Booking updated successfully!");
            window.location.reload();
        })
    }

    const handleClick = () => {
        if (step === 1) {
            setStep(2);
        }
    };
    




return (
    <div className="container-fluid">
        <div className='row'>
            <div className='col-auto col-md-3 col-xl-2 p-0'>
                <Sidebar />
            </div>
            <div className='col-auto col-md-9 col-xl-10 '>
                <div className='fs-2 ms-3'>Edit Booking</div>
                {successMessage && <div className="mt-3 alert alert-success">{successMessage}</div>}
                <div className="card rounded ms-3 p-4 mt-4">
                            <div className="row ">
                                <div className='fs-4 mb-5'>Booking Details</div>
                                <div className="col-2 mb-4">
                                    <label className="fs-5">Room</label>
                                </div>
                                <div className="col-10 mb-4">
                                    <select className="form-control" value={heading} onChange={(e) => setHeading(e.target.value)}>
                                        <option value="">Select a Room</option>
                                        <option value="Small Conference room">Small Conference room</option>
                                        <option value="Large Conference room">Large Conference room</option>
                                        <option value="Panoramic room">Panoramic room</option>
                                    </select>
                                </div>
                                <div className="col-2 mb-4">
                                    <label className="fs-5">Capacity</label>
                                </div>
                                <div className="col-10  mb-4">
                                    <input className="form-control " type="digit" value={capacity} onChange={(e) => setCapacity(e.target.value)}></input>
                                </div>
                                <div className="col-2 mb-4">
                                    <label className="fs-5">Date</label>
                                </div>
                                <div className="col-10 mb-4">
                                    <input className="form-control" type="date" value={date} onChange={(e) => setDate(e.target.value)}></input>
                                </div>
                                <div className="col-2 mb-4">
                                    <label className="fs-5">Book For</label>
                                </div>
                                <div className="col-10 mb-4">
                                    <select className="form-control" value={bookfor} onChange={(e) => setBookFor(e.target.value)}>
                                        <option value="">Select Option</option>
                                        <option value="Multiple Days">Multiple Days</option>
                                        <option value="Half Day">Half Day</option>
                                        <option value="Hour">Hour</option>
                                    </select>

                                </div>
                                <div className="col-2 mb-4">
                                    <label className="fs-5">Price per day</label>
                                </div>
                                <div className="col-10 mb-4">
                                    <div className="input-group">
                                        <div className="input-group-text">$</div>
                                        <input className="form-control" type="text"  value={ppday} onChange={(e) => setPPDay(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="col-2 mb-4">
                                    <label className="fs-5">Status</label>
                                </div>
                                <div className="col-10 mb-4">
                                    <select className="form-control"  value={status} onChange={(e) => setStatus(e.target.value)}>
                                        <option value="">Select status</option>
                                        <option value="All">All</option>
                                        <option value="Pending">Pending</option>
                                        <option value="Confirmed">Confirmed</option>
                                        <option value="Cancelled">Cancelled</option>
                                    </select>
                                </div>
                                <div className="col-2 mb-4">
                                    <label className="fs-5">Total</label>
                                </div>
                                <div className="col-10 mb-4">
                                    <div className="input-group">
                                        <div className="input-group-text">$</div>
                                        <input className="form-control" type="text"  value={total} onChange={(e) => setTotal(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="col-2 "></div>
                        <div className="col-10 mt-3 d-grid gap-2 d-md-flex">
                                <button className="btn btn-secondary" onClick={handleClick}>Next</button>
                                </div>
                            </div>
                        {/* Client Details form */}
                            <div className="row">
                                <div className='fs-4 mb-5' >Client Details</div>
                                <div className="col-2 mb-4">
                                    <label className="fs-5">Name</label>
                                </div>
                                <div className="col-10 mb-4">
                                <input className="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                                </div>
                                <div className="col-2 mb-4">
                                    <label className="fs-5">Email</label>
                                </div>
                                <div className="col-10  mb-4">
                                    <input className="form-control" type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                                </div>
                                <div className="col-2 mb-4">
                                    <label className="fs-5">Phone</label>
                                </div>
                                <div className="col-10 mb-4">
                                    <input className="form-control" type="text" value={phone} onChange={(e) => setPhone(e.target.value)}></input>
                                </div>
                                <div className="col-2 mb-4">
                                    <label className="fs-5">Company</label>
                                </div>
                                <div className="col-10 mb-4">
                                <input className="form-control" type="text" value={company} onChange={(e) => setCompany(e.target.value)}></input>
                                </div>
                                <div className="col-2 mb-4">
                                    <label className="fs-5">Address</label>
                                </div>
                                <div className="col-10 mb-4">
                                <input className="form-control" type="text" value={address} onChange={(e) => setAddress(e.target.value)}></input>
                                </div>
                                <div className="col-2 mb-4">
                                    <label className="fs-5">City</label>
                                </div>
                                <div className="col-10 mb-4">
                                <input className="form-control" type="text" value={city} onChange={(e) => setCity(e.target.value)}></input>
                                </div>
                                <div className="col-2 mb-4">
                                    <label className="fs-5">State</label>
                                </div>
                                <div className="col-10 mb-4">
                                <input className="form-control" type="text" value={state} onChange={(e) => setState(e.target.value)}></input>
                                </div>
                                <div className="col-2 mb-4">
                                    <label className="fs-5">Zip</label>
                                </div>
                                <div className="col-10 mb-4">
                                <input className="form-control" type="text" value={zip} onChange={(e) => setZip(e.target.value)}></input>
                                </div>
                                <div className="col-2 mb-4">
                                    <label className="fs-5">Country</label>
                                </div>
                                <div className="col-10 mb-4">
                                <input className="form-contro" type="text" value={country} onChange={(e) => setCountry(e.target.value)}></input>
                                </div>
                                <div className="col-2 "></div>
                        <div className="col-10 mt-3 d-grid gap-2 d-md-flex">
                        <button type="button"  className="btn btn-secondary" onClick={handleEditForm}>Update</button>
                        <button type="button"  className="btn btn-dark " onClick={()=>navigate("/bookings")}>Cancel</button>
                        </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
)
}

export default EditBooking;