import React, {useState, useEffect} from 'react';
import Sidebar from './Sidebar';
import {useBookingsQuery, useRemoveBookingMutation} from './API/rtkQuery'
import { useNavigate } from 'react-router-dom';

const Bookings = () => {
    const { data: bookData, error } = useBookingsQuery();
    const [findBooking, setFindBooking] = useState('');
    const [selectStatus, setSelectStatus] = useState('All'); 
    const navigate = useNavigate();
    const [removeBooking] = useRemoveBookingMutation();
    const [successMessage, setSuccessMessage] = useState("");
    
    useEffect(() => {
        let timer;
        if (successMessage) {
            timer = setTimeout(() => {setSuccessMessage("");}, 1000);
        }
        return () => clearTimeout(timer);
    }, [successMessage]);

    let filterBookings = bookData;
    const handleSearch = (event) => {
        setFindBooking(event.target.value);
    };

    const handleStatusChange = (status) => {
        setSelectStatus(status);
    };

    

    if (selectStatus !== 'All') {
        filterBookings = filterBookings.filter((booking) => booking.status === selectStatus);
    }
    filterBookings = filterBookings?.filter((response) =>
        response.title.toLowerCase().includes(findBooking.toLowerCase())
    )

    const navigateToEditBooking = (booking) => {
        navigate(`editbooking/${booking.id}`, { state: { booking } })
    }

    const handleDelete = (bookingId) => {
        removeBooking(bookingId).unwrap().then((res)=>{
            setSuccessMessage("Booking deleted successfully!");
            window.location.reload();
        })
    }

    

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-auto col-md-3 col-xl-2 p-0'>
                    <Sidebar />
                </div>
                <div className='col-auto col-md-9 col-xl-10 '>
                    <div className='fs-2 ms-3'>List of Bookings</div>
                    <div className='d-flex flex-row p-2 mt-5'>
                        <button type="button" className='btn btn-secondary' onClick={() => navigate("/addBooking")}><i className='fa fa-plus'></i>  Add Booking</button>
                        <input className="search ms-5 p-2 rounded"
                            type="text"
                            value={findBooking}
                            onChange={handleSearch}
                            placeholder="Search"
                        />
                    </div>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button type="button" className={`rounded ${selectStatus === 'All' ? 'active' : ''}`}
                            onClick={() => handleStatusChange('All')}> All </button>

                        <button type="button" className={`rounded ${selectStatus === 'Pending' ? 'active' : ''}`}
                            onClick={() => handleStatusChange('Pending')}> Pending </button>

                        <button type="button" className={`rounded ${selectStatus === 'Confirmed' ? 'active' : ''}`}
                            onClick={() => handleStatusChange('Confirmed')}> Confirmed </button>

                        <button type="button" className={`rounded ${selectStatus === 'Cancelled' ? 'active' : ''}`}
                            onClick={() => handleStatusChange('Cancelled')}> Cancelled </button>
                    </div>



                    <div className='card shadow bg-body rounded mt-5 p-3'>
                    {filterBookings?.length === 0 ? (<div>
                        No data found.
                        </div> ) :
                         (
                            <table className="table table-striped border">
                                <thead>
                                    <tr>
                                        <th scope="col">Room</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Total</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {filterBookings?.map((booking) => (
                                    <tr key={booking.id}>
                                        <td>{booking.date}</td> 
                                        <td>{booking.users?.map((user) => (<div
                                        key={user.id}>{user.name}
                                        </div> ))}</td>
                                        <td>{booking.total}</td>
                                        <td>{booking.status}</td>
                                        <td>
                                        <i className='fa fa-edit ms-2' style={{ "cursor": "pointer" }} onClick={() => navigateToEditBooking(booking)}></i>
                                        <i className='fa fa-trash ms-3'  style={{"cursor":"pointer"}} onClick={() => handleDelete(booking.id)} ></i>
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

export default Bookings;