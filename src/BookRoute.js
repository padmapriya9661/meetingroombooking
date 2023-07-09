import { Routes, Route } from 'react-router-dom'
import AddBooking from './AddBooking';
import EditBooking from './EditBooking';

function BookingRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/addbooking" element={<AddBooking />}></Route>
                <Route path="/editbooking/:data" element={<EditBooking />}></Route>
            </Routes>
        </div>
    );

}

export default BookingRoutes;