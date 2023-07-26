import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';
import Bookings from './Bookings';
import Rooms from './Rooms';
import AddBooking from './AddBooking';
import SignIn from './SignIn';
import SignUp from './SignUp';
import AddRoom from './AddRoom';
import EditBooking from './EditBooking';
import Users from './Users';
import AddUser from './AddUser';
import EditUser from './EditUser';
import EditRoom from './EditRoom';
import Udashboard from './UserBooking/Dashboard';
import RoomBooking from './UserBooking/RoomBooking';

const App = () =>{ 
  
  return (
    <div>
      {/* <BrowserRouter> */}
      <h2>react test session</h2>
      <Router>
      <Routes>
      <Route path="/" element={<SignIn/>} />
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/bookings' element={<Bookings/>}/>
      <Route path='/rooms' element={<Rooms/>}/>
      <Route path='/addbooking' element={<AddBooking/>}/>
      <Route path='/addroom' element={<AddRoom/>}/>
      <Route path='/editroom/:id' element={<EditRoom/>}/>
      <Route path="/signup" element={<SignUp />} />
      <Route path='/editbooking/:id' element={<EditBooking/>}/>
      <Route path='/users' element={<Users/>}/>
      <Route path='/adduser' element={<AddUser/>}/>
      <Route path='/edituser/:id' element={<EditUser/>}/>
      <Route path="/u-dashboard" element={<Udashboard/>}></Route>
      <Route path="/book/*" element={<RoomBooking/>}></Route>

      </Routes>
      </Router>
      {/* </BrowserRouter> */}
    </div>
      
      
      
  );
}

export default App;
