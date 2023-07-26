import React, { useState, useEffect }  from "react";
import { Link } from 'react-router-dom';
import Sidebar from "./Sidebar";
import { useRoomsQuery, useRemoveRoomMutation, usePutroomMutation, useBookingsQuery } from "./API/rtkQuery";
import { useNavigate } from 'react-router-dom';



const Rooms=()=>{
    const { data: bookData, error: bookingError } = useBookingsQuery();
    const [findRoom, setFindRoom] = useState('');
    const { data, error } = useRoomsQuery();
    const [removeRoom] = useRemoveRoomMutation();
    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState("");
    const [editroom] = usePutroomMutation();
    const [selectStatus, setSelectStatus] = useState('All');
    
    useEffect(() => {
        let timer;
        if (successMessage) {
            timer = setTimeout(() => {setSuccessMessage("");}, 1000);
        }
        return () => clearTimeout(timer);
    }, [successMessage]);
    let filterRooms = bookData;


    filterRooms = data?.map((response)=> {
        const bookingsCount = bookData?.filter((booking) => booking.title === response.title).length;
        return { ...response, bookingsCount };
    })?.filter((response) =>
        response.title.toLowerCase().includes(findRoom.toLowerCase())
    )
    const handleSearch = (event) => {
        setFindRoom(event.target.value);
    };
    const handleStatusChange = (status) => {
        setSelectStatus(status);
    };
    if (selectStatus !== 'All') {
        filterRooms = filterRooms.filter((room) => room.status === selectStatus);
    }
    // filterRooms = filterRooms?.filter((response) =>
    //     response.title?.toLowerCase().includes(findRoom.toLowerCase())
    // )

    const navigateToEditRoom = (room) => {
        navigate(`/editroom/${room.id}`, { state: { room } })
    }

    const handleDelete = (roomId) => {
        removeRoom(roomId).unwrap().then((res) => {
            setSuccessMessage("Room deleted successfully!");
            window.location.reload();
        })
    }
    const editStatus = (room, newStatus) => {
        const updatedRoom = { ...room, status: newStatus };
        return editroom(updatedRoom);
      };
    
      const handleEditStatus = async (room, newStatus) => {
        try {
          await editStatus(room, newStatus);
          setSuccessMessage("Status updated successfully!");
        } catch (error) {
        }
      };

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-auto col-md-3 col-xl-2 p-0'>
                    <Sidebar />
                </div>
                <div className='col-auto col-md-9 col-xl-10 '>
                    {successMessage && <div className="mt-3 alert alert-danger">{successMessage}</div>}
                    <div className='fs-2 ms-3'>List of Meeting Rooms</div>
                    <div className='d-flex flex-row p-2 mt-5'>
                        <button type="button" className='btn btn-secondary' onClick={() => navigate("/addroom")}><i className='fa fa-plus'></i>  Add Room</button>
                        <input className="search ms-5 p-2 rounded" type="text" value={findRoom} onChange={handleSearch} placeholder="Search"  />
                    </div>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button
                            type="button"
                            className={`rounded btn-lg p-2 ${selectStatus === 'All' ? 'active' : ''}`}
                            onClick={() => handleStatusChange('All')}> All
                        </button>
                        <button
                            type="button"
                            className={`rounded ${selectStatus === 'Active' ? 'active' : ''}`}
                            onClick={() => handleStatusChange('Active')}>
                            Active
                        </button>
                        <button
                            type="button"
                            className={`rounded ${selectStatus === 'InActive' ? 'active' : ''}`}
                            onClick={() => handleStatusChange('InActive')}>
                                InActive
                        </button>
                       
                    </div>
                    {/* table data------- */}

                    <div className='card shadow bg-body rounded mt-5 p-3'>
                    {bookData?.length === 0 ? (
                            <div>No data found.</div>
                        ) : (
                  
                            <table className="table table-striped border">
                                <thead>
                                    <tr>
                                        <th scope="col">Image</th>
                                        <th scope="col">Room</th>
                                        <th scope="col">Capacity</th>
                                        <th scope="col">Bokings</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {bookData?.map((room) => (
                                    <tr>
                                        <td><img src={room.image} width={"100px"}/></td>
                                        <td>{room.heading}</td>
                                        <td>{room.capacity}</td>
                                        <td><Link to="/bookings" >{room.bookingsCount}</Link></td>
                                        <td contentEditable="true"  onBlur={(e) => handleEditStatus(room, e.target.textContent)}>{room.status}</td>
                                        <td>
                                        <i className='fa fa-edit ms-2' style={{ "cursor": "pointer" }} onClick={() => navigateToEditRoom(room)}></i>
                                        <i className='fa fa-trash ms-3' style={{ "cursor": "pointer" }} onClick={() => handleDelete(room.id)}></i>
                                        </td>
                                    </tr>
                                ))}
                                        
                                
                                    
                                </tbody>
                            </table>
                        )}
                    </div>

                </div>
            </div>
        </div>
    )

}

export default Rooms;