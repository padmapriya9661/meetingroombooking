import React, { useState , useEffect} from "react";
import Sidebar from "./Sidebar";
import {useAddroomsMutation} from './API/rtkQuery'
import { useNavigate } from "react-router-dom";

const AddRoom = () => {
    const navigate = useNavigate();
    const [heading, setHeading] = useState('');
    const [capacity, setCapacity] = useState('');
    const [description, setDescription] = useState('');
    const [bookfor, setBookFor] = useState([]);
    const [ppday, setPPDay] = useState('');
    const [status, setStatus] = useState('');
    // const [addRooms, error, isLoading] = useAddroomsMutation()
    const [addRooms] = useAddroomsMutation()
    
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        let timer;
        if (successMessage) {
            timer = setTimeout(() => {setSuccessMessage(""); }, 1000);
        }
        return () => clearTimeout(timer);
    }, [successMessage]);


    const handleAddRoom = (e) => {
        e.preventDefault();
        const newRoom = {
            heading,
            capacity: parseInt(capacity),
            description,
            bookfor,
            ppday,
            status
        };
        addRooms(newRoom).unwrap().then((res) => {
            setSuccessMessage("Room added successfully!");
            window.location.reload();
        })
    }

    const handleCheckboxChange = (e) => {
        const value = e.target.value;
        if (e.target.checked) {
            setBookFor((prevSelectedOptions) => [...prevSelectedOptions, value]);
        } else {
            setBookFor((prevSelectedOptions) =>
                prevSelectedOptions.filter((option) => option !== value)
            );
        }
    };

    return (
        <div className="container-fluid">
            <div className='row'>
                <div className='col-auto col-md-3 col-xl-2 p-0'>
                    <Sidebar />
                </div>
                <div className='col-auto col-md-9 col-xl-10 '>
                    {successMessage && <div className="mt-3 alert alert-success">{successMessage}</div>}
                    <div className='fs-2 ms-3 '>Add a Meeting Room</div>
                    <div className="card shadow rounded mt-5 p-4">
                    <div className="row ">
                        <div className="col-2 mb-4">
                            <label className="fs-5">Title</label>
                        </div>
                        <div className="col-10 mb-4">
                            <input className="form-control" type="text" value={heading} onChange={(e) => setHeading(e.target.value)}></input>
                        </div>
                        <div className="col-2 mb-4">
                            <label className="fs-5">Capacity</label>
                        </div>
                        <div className="col-10  mb-4">
                            <input className="form-control" type="digit" value={capacity} onChange={(e) => setCapacity(e.target.value)}></input>
                        </div>
                        <div className="col-2 mb-4">
                            <label className="fs-5">Description</label>
                        </div>
                        <div className="col-10 mb-4">
                            <textarea class="form-control" id="exampleFormControl" rows="3" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                        </div>
                        <div className="col-2 mb-4">
                            <label className="fs-5">Book For</label>
                        </div>
                        <div className="col-10 mb-4">
                            <input className="" type="checkbox" value="multipledays" checked={bookfor.includes("multipledays")} onChange={handleCheckboxChange} />
                            <label className="ms-2 fs-5">Multiple-days</label>
                            <input className="ms-4" type="checkbox" value="halfday" checked={bookfor.includes("halfday")} onChange={handleCheckboxChange}/>
                            <label className="ms-2 fs-5">Half-day</label>
                            <input className="ms-4"type="checkbox" value="hour"  checked={bookfor.includes("hour")} onChange={handleCheckboxChange} />
                            <label className="ms-2 fs-5">Hour</label>
                        </div>
                        <div className="col-2 mb-4">
                            <label className="fs-5">Price per day</label>
                        </div>
                        <div className="col-10 mb-4">
                                <input className="form-control" type="text" value={ppday} onChange={(e) => setPPDay(e.target.value)}/>
                        </div>
                        <div className="col-2 mb-4">
                            <label className="fs-5">Status</label>
                        </div>
                        <div className="col-10 mb-4">
                            <input className="form-control" type="text" value={status} onChange={(e) => setStatus(e.target.value)}></input>
                        </div>
                        <div className="col-2 "></div>
                        <div className="col-10 mt-3 d-grid gap-2 d-md-flex">
                            <button type="button" className="btn btn-secondary " onClick={handleAddRoom}>Save</button>
                            <button type="button" className="btn btn-dark" onClick={()=>navigate("/rooms")}>Cancel</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddRoom;