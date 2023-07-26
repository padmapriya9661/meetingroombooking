import { useGetroombookingsQuery } from "../API/rtkQuery";
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

const Udashboard = () => {
    const navigate = useNavigate();
    const { data, error } = useGetroombookingsQuery();
    const userName = localStorage.getItem("UserName")

    const navigateToAddBookingRoom = (booking) => {
        navigate(`/book/${booking.id}`, { state: { booking } })
    }

    const handleLogout = () => {
        navigate("/")
        localStorage.clear();
    }

    return (
        <div className='container-fluid p-0'>
            <div className="header">
                <p className="fs-2 mb-0 fw-bold">Meeting rooms</p>
                <p className="fs-4 mb-0 fw-bold" style={{marginLeft:"50rem"}}>Welcome, {userName}</p>
                <div onClick={handleLogout} className="d-flex align-items-center  px-0 text-dark text-decoration-none fs-5 fw-bold">
                    <i className="fa fa-sign-out"></i> <span className="ms-3 d-none d-sm-inline">Logout</span>
                    </div>
            </div>
            {data?.map((room) => (
                <div className="card m-5 p-4" key={room.id}>
                    <div className="row">
                        <div className="col-6">
                            <img src={room.image} width={"600px"}></img>
                            <div className="row">
                                <div className="col">
                                    <p className="mt-3 mb-0">Capacity:</p>
                                    <p style={{ fontWeight: "bold" }}>{room.capacity}</p>
                                </div>
                                <div className="col">
                                    <p className="mt-3 mb-0">Price:</p>
                                    {room?.price?.map((data) => (
                                        <>
                                            <p style={{ fontWeight: "bold" }} className="mb-0">$ {data}</p>
                                        </>
                                    ))}

                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <p style={{ color: "grey", fontSize: "2rem"  }}>{room.roomName}</p>
                            {room.description.map((data) => (
                                <div>
                                    <p>-  {data}</p>
                                </div>
                            ))}
                            <button type="button" className="btn btn-secondary" onClick={() => navigateToAddBookingRoom(room)}>Book this room</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )

}

export default Udashboard;