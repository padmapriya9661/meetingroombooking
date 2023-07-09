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

const App = () =>{ 
  
  return (
    <div>
      {/* <BrowserRouter> */}
      <Router>
      <Routes>
      <Route path="/" element={<SignIn/>} />
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/bookings' element={<Bookings/>}/>
      <Route path='/rooms' element={<Rooms/>}/>
      <Route path='/addbooking' element={<AddBooking/>}/>
      <Route path='/addroom' element={<AddRoom/>}/>
      <Route path="/signup" element={<SignUp />} />
      <Route path='/editbooking' element={<EditBooking/>}/>
      <Route path='/users' element={<Users/>}/>
      <Route path='/adduser' element={<AddUser/>}/>
      <Route path='/edituser' element={<EditUser/>}/>

      </Routes>
      </Router>
      {/* </BrowserRouter> */}
    </div>
      
      
      
  );
}

export default App;
