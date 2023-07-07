import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';
import Bookings from './Bookings';
import Rooms from './Rooms';
import AddBooking from './AddBooking';
import SignIn from './SignIn';
import SignUp from './SignUp';
import AddRoom from './AddRoom';

const App = () =>{ 
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<SignIn/>} />
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/bookings' element={<Bookings/>}/>
      <Route path='/rooms' element={<Rooms/>}/>
      <Route path='/addbooking' element={<AddBooking/>}/>
      <Route path='/addroom' element={<AddRoom/>}/>
      <Route path="/signup" element={<SignUp />} />

      </Routes>
      </BrowserRouter>
    </div>
      
      
      
  );
}

export default App;
