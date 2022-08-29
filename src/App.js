import logo from './logo.svg';
import './App.css';
import Register from './frontend/Register';
import Login from './frontend/Login';
import UserDashboard from './frontend/Dashboard/UserDashboard';
import AdminDashboard from './frontend/Dashboard/AdminDashboard';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/user/dashboard' element={<UserDashboard/>}/>
          <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
          <Route/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
