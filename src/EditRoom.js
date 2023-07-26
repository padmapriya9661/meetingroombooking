import { useState , useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import {usePutroomMutation} from './API/rtkQuery'


const EditRoom = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { room } = location.state;
    const [heading, setHeading] = useState(room?.title);
    const [capacity, setCapacity] = useState(room?.capacity);
    const [description, setDescription] = useState(room?.description);
    const [bookfor, setBookFor] = useState(room.bookfor || []);
    const [ppday, setPPDay] = useState(room?.ppday);
    const [status, setStatus] = useState(room?.status);
    const [editroom, { isLoading }] = usePutroomMutation();
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        let timer;
        if (successMessage) {
            timer = setTimeout(() => {setSuccessMessage("");}, 1000);
        }
        return () => clearTimeout(timer);
    }, [successMessage]);

    const handleEditForm = (e) => {
        e.preventDefault();
        const updatedRoom = { ...room, heading, capacity, description, bookfor, ppday, status };
        editroom(updatedRoom).unwrap().then((response) => {
            setSuccessMessage("Room updated successfully!");
            window.location.reload();
        })

    }
    const handleCheckboxChange = (e) => {
        const optionValue = e.target.value;
        if (e.target.checked) {
            setBookFor([...bookfor, optionValue]);
        } else {
            setBookFor(bookfor.filter((option) => option !== optionValue));
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
                    <div className='fs-2 ms-3 font-weight-bold'>Edit Meeting Room</div>
                    <div className="card rounded mt-5 p-4">
                    <div className="row">
                        <div className="col-2 mb-4">
                            <label className="fs-5">Title</label>
                        </div>
                        <div className="col-10 mb-4">
                            <input className="form-control" type="text" value={heading} onChange={(e) => setHeading(e.target.value)}></input>
                        </div>
                        <div className="col-2 mb-4">
                            <label className="fs-5">Capacity</label>
                        </div>
                        <div className="col-10 mb-4">
                            <input className="form-control" type="digit" value={capacity} onChange={(e) => setCapacity(e.target.value)}></input>
                        </div>
                        <div className="col-2 mb-4">
                            <label className="fs-5">Description</label>
                        </div>
                        <div className="col-10 mb-4">
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={description} onChange={(e) => setDescription(e.target.value)}>
                        </textarea>
                        </div>
                        <div className="col-2 mb-4">
                            <label className="fs-5">Book For</label>
                        </div>
                        <div className="col-10 mb-4">
                            <input type="checkbox"  value="multipledays" checked={bookfor.includes("multipledays")}onChange={handleCheckboxChange}/>
                            <label className="ms-2 fs-5">Multiple-days</label>
                            <input className="ms-4"  type="checkbox" value="halfday" checked={bookfor.includes("halfday")} onChange={handleCheckboxChange}/>
                            <label className="ms-2 fs-5">Half-day</label>
                            <input className="ms-4" type="checkbox" value="hour" checked={bookfor.includes("hour")} onChange={handleCheckboxChange}/>
                            <label className="ms-2 fs-5">Hour</label>
                        </div>
                        <div className="col-2 mb-4">
                            <label className="fs-5">Price per day</label>
                        </div>
                        <div className="col-10 mb-4">
                        <div className="input-group">
                                <div className="input-group-text">$</div>
                                <input className="form-control" type="text" value={ppday} onChange={(e) => setPPDay(e.target.value)} />
                            </div>
                        </div>
                        <div className="col-2 mb-4">
                            <label className="fs-5">Status</label>
                        </div>
                        <div className="col-10 mb-4">
                            <input className="form-control" type="text" value={status} onChange={(e) => setStatus(e.target.value)}></input>
                        </div>
                        <div className="col-2 "></div>
                        <div className="col-10 mt-3 d-grid gap-2 d-md-flex">
                            <button type="button"  className="btn btn-secondary" onClick={handleEditForm}>Update</button>
                            <button type="button"  className="btn btn-dark" onClick={()=>navigate("/rooms")}>Cancel</button>
                        </div>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EditRoom;