import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import AllUsers from './component/AllUsers/AllUsers';
import AddUser from './component/AddUser/AddUser';
import User from './component/User/User';

function App() {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/all-users' element={<AllUsers/>} />
        <Route path='/add-user' element={<AddUser/>} />
        <Route path='/user/:userName' element={<User />} />
        <Route path='*' element="Page Not Found"/>
      </Routes>
    </Router>
  );
}

export default App;
